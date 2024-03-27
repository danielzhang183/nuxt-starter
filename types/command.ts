export const scopes = [
  '',
  'Actions',
  'Tabs',
  'Navigation',
  'Preferences',
  'Account',
  'Languages',
  'Switch account',
  'Settings',
  'Hashtags',
  'Users',
] as const

export type CommandScopeNames = typeof scopes[number]

export interface CommandScope {
  id: string
  display: string
}

export interface CommandProvider {
  parent?: string
  scope?: CommandScopeNames

  // smaller is higher priority
  order?: number
  visible?: () => unknown

  icon: string | (() => string)
  name: string | (() => string)
  description?: string | (() => string | undefined)

  bindings?: string[] | (() => string[])

  onActivate?: () => void
  onComplete?: () => CommandScope
}

export type ResolvedCommand = Exclude<CommandProvider, 'icon' | 'name' | 'description' | 'bindings'> & {
  icon: string
  name: string
  description: string | undefined
  bindings: string[] | undefined
}

// TODO: define a type for command arg
export type CommandHandler<T = void> = (arg: T) => void

export interface BaseQueryResultItem {
  index: number
  type: string
  scope?: CommandScopeNames
  onActivate?: () => void
  onComplete?: () => CommandScope
}

export interface SearchQueryResultItem extends BaseQueryResultItem {
  type: 'search'
  search: SearchResult
}

export interface CommandQueryResultItem extends BaseQueryResultItem {
  type: 'command'
  cmd: ResolvedCommand
}

export type QueryResultItem = SearchQueryResultItem | CommandQueryResultItem

export interface SearchResult {

}

export interface QueryResult {
  length: number
  items: QueryResultItem[]
  grouped: Map<CommandScopeNames, QueryResultItem[]>
}
