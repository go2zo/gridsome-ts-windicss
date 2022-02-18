import { computed } from '@vue/composition-api'
import { getCurrentInstance } from './utils'

export const useColorMode = () => {
  const vm = getCurrentInstance()
  if (!vm) throw new Error('This must be called within a setup function.')

  return (computed(() => vm.$colorMode))
}
