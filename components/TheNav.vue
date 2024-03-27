<template>
  <div px-4 py-3 text-lg border="b base" flex="~ items-center">
    <div flex="~ items-center">
      <div i-carbon-campsite text-2xl text-primary />
      <div ml-1 text-xl>
        Nuxt
        <sup class="text-xs italic opacity-75">Opinionated Template</sup>
      </div>
    </div>

    <div flex-auto />

    <SettingsScreenFull />
    <SettingsColorMode />

    <NuxtLink
      btn-icon
      rel="noreferrer"
      href="https://github.com/danielzhang183/vite-starter"
      target="_blank"
      title="GitHub"
    >
      <div i-carbon-logo-github />
    </NuxtLink>
  </div>
</template>
