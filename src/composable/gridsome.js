import { computed } from '@vue/composition-api'
import { getCurrentInstance } from './utils'
import { globalPage, globalStatic } from './globals'

export const usePageQuery = () => {
  const vm = getCurrentInstance()
  if (!vm) throw new Error('This must be called within a setup function.')

  return (computed(() => vm[globalPage] || vm.$page))
}

export const useStaticQuery = () => {
  const vm = getCurrentInstance()
  if (!vm) throw new Error('This must be called within a setup function.')

  return (computed(() => vm[globalStatic] || vm.$static))
}
