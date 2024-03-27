<script setup lang="ts">
import { isCommandPanelOpen } from '~/composables/dialog'

const isMac = useIsMac()

// TODO: temporary, await for keybind system
// open search panel
// listen to ctrl+k on windows/linux or cmd+k on mac
// open command panel
// listen to ctrl+/ on windows/linux or cmd+/ on mac
// or shift+ctrl+k on windows/linux or shift+cmd+k on mac
useEventListener('keydown', (e: KeyboardEvent) => {
  if ((e.key === 'k' || e.key === 'л') && (isMac.value ? e.metaKey : e.ctrlKey)) {
    e.preventDefault()
    openCommandPanel(e.shiftKey)
  }
  if ((e.key === '/' || e.key === ',') && (isMac.value ? e.metaKey : e.ctrlKey)) {
    e.preventDefault()
    openCommandPanel(true)
  }
})
</script>

<template>
  <template v-if="isHydrated">
    <ModalDialog v-model="isCommandPanelOpen" max-w-fit flex>
      <CommandPanel @close="closeCommandPanel()" />
    </ModalDialog>
  </template>
</template>
