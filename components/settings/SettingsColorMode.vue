<script setup lang="ts">
const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button btn-icon @click="toggleMode">
    <div i-ph-moon-stars-duotone dark:i-ph-sun-dim-duotone />
  </button>
</template>
