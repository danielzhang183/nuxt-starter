FROM docker.io/library/node:lts-alpine AS base

# Prepare work directory
WORKDIR /nst

FROM base AS builder

# Prepare pnpm https://pnpm.io/installation#using-corepack
RUN core/Users/dylanzhang/r/nst/.dockerignorepack enable

# Prepare deps
RUN apk update
RUN apk add git --no-cache

# Prepare build deps (ignore postinstall scripts for now)
COPY .npmrc package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile --ignore-scripts

# Copy all source files
COPY . .

# Run full install with every postinstall script ( This needs project file )
RUN  --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

# Build
RUN pnpm build

FROM base AS runner

ARG UID=911
ARG GID=911

# Create a dedicated user and group
RUN set -eux; \
    addgroup -g $GID nst; \
    adduser -u $UID -D -G nst nst;

USER nst

ENV NODE_ENV=production

COPY --from=builder /nst/.output ./.output

EXPOSE 5314/tcp

ENV PORT=5314

# Specify container only environment variables ( can be overwritten by runtime env )
ENV NUXT_STORAGE_FS_BASE='/nst/data'

# Persistent storage data
VOLUME [ "/nst/data" ]

CMD ["node", ".output/server/index.mjs"]
