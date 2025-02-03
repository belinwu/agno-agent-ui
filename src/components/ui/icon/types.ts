import { type ElementType } from 'react'

export type IconType =
  | 'run'
  | 'close'
  | 'GitHub'
  | 'Discord'
  | 'Google'
  | 'dashboard'
  | 'activity'
  | 'datasets'
  | 'playground'
  | 'settings'
  | 'legal'
  | 'documentation'
  | 'time'
  | 'reload'
  | 'caret-down'
  | 'show'
  | 'hide'
  | 'viewMode'
  | 'details'
  | 'evaluation'
  | 'prompt'
  | 'human-review'
  | 'empty'
  | 'instructions'
  | 'caret-left'
  | 'caret-right'
  | 'eye-open'
  | 'eye-closed'
  | 'activeSidebar'
  | 'avatar'
  | 'scan-face'
  | 'loader'
  | 'sort'
  | 'user-face'
  | 'radio-button'
  | 'api'
  | 'arrow-up'
  | 'check'
  | 'billingCycle'
  | 'refresh'
  | 'support'
  | 'downgrade'
  | 'data'
  | 'calendar'
  | 'user'
  | 'team'
  | 'workspace'
  | 'error'
  | 'thumbs-up'
  | 'thumbs-down'
  | 'read'
  | 'write'
  | 'admin'
  | 'delete'
  | 'userInfo'
  | 'name'
  | 'billing'
  | 'create'
  | 'ellipsisHorizontal'
  | 'permission'
  | 'review'
  | 'rocket'
  | 'trash'
  | 'globe'
  | 'triangle-left'
  | 'triangle-right'
  | 'triangle-down'
  | 'logout'
  | 'sun'
  | 'moon'
  | 'half2'
  | 'tool'
  | 'system'
  | 'dot'
  | 'send'
  | 'arrow-right'
  | 'user-2'
  | 'info'
  | 'more-vertical'
  | 'open-ai'
  | 'arrow-big-down-dash'
  | 'arrow-big-up-dash'
  | 'bar-chart-4'
  | 'hammer'
  | 'arrow-down'
  | 'external-link'
  | 'copy'
  | 'pencil'
  | 'face'
  | 'smile'
  | 'magic-wand'
  | 'agent'
  | 'wifi-off'
  | 'messages-square'
  | 'mistral'
  | 'gemini'
  | 'aws'
  | 'azure'
  | 'anthropic'
  | 'groq'
  | 'fireworks'
  | 'deepseek'
  | 'cohere'
  | 'ollama'
  | 'xai'
  | 'reasoning'
  | 'drag'
  | 'chat-bubble'
  | 'arrow-left'
  | 'sheet'
  | 'calendar-days'
  | 'context'
  | 'search'
  | 'check-circle-2'
  | 'workflow'
  | 'chevron-down'
  | 'corner-down-right'
  | 'caret-up'
  | 'download'

export interface IconProps {
  type: IconType
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'dot' | 'xxs'
  className?: string
  color?: string
  disabled?: boolean
}

export type IconTypeMap = {
  [key in IconType]: ElementType
}
