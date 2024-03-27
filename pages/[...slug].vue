<script setup lang="ts">
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/danielzhang183/vite-starter" target="_blank">
        Nuxt Starter
      </a>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="What's your name"
      aria-label="What's your name"
      type="text"
      autocomplete="false"
      input-base w="250px"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">What's your name</label>

    <div>
      <button
        m-3 text-sm btn-solid
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
