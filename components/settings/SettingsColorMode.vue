<script setup lang="ts">
const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button
    rounded p2
    hover="bg-active"
    @click="toggleMode"
  >
    <div i-ph-moon-stars-duotone dark:i-ph-sun-dim-duotone text-2xl />
  </button>
</template>
