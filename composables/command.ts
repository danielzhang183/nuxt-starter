import type { CommandProvider } from '~/types'

// @unocss-include

export function useCommand(cmd: CommandProvider) {
  const registry = useCommandStore()

  const register = () => registry.register(cmd)
  const cleanup = () => registry.remove(cmd)

  register()
  onActivated(register)
  onDeactivated(cleanup)
  tryOnScopeDispose(cleanup)
}

export function useCommands(cmds: () => CommandProvider[]) {
  const registry = useCommandStore()

  const commands = computed(cmds)

  watch(commands, (n, o = []) => {
    for (const cmd of o)
      registry.remove(cmd)
    for (const cmd of n)
      registry.register(cmd)
  }, { deep: true, immediate: true })

  const cleanup = () => {
    commands.value.forEach(cmd => registry.remove(cmd))
  }

  onDeactivated(cleanup)
  tryOnScopeDispose(cleanup)
}

export function provideGlobalCommands() {
  const colorMode = useColorMode()

  useCommand({
    scope: 'Preferences',

    name: () => 'Toggle color mode',
    icon: () => colorMode.value === 'light' ? 'i-ri:sun-line' : 'i-ri:moon-line',

    onActivate() {
      colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
    },
  })
}
