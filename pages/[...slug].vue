<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div text-green p-4>
    hello world
    <div text-gray-400>
      x: {{ x }}; y: {{ y }}
    </div>
  </div>
</template>
