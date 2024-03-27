export function useIsMac() {
  const headers = useRequestHeaders(['user-agent'])
  return computed(() => headers['user-agent']?.includes('Macintosh')
    ?? navigator?.platform?.includes('Mac') ?? false)
}
