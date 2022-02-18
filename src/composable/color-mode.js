import { computed } from '@vue/composition-api'
import { getCurrentInstance } from './utils'

export function useColorMode({ values }) {
  const vm = getCurrentInstance()
  if (!vm) throw new Error('This must be called within a setup function.')

  const cm = vm['$colorMode'] || vm.$colorMode

  function switchColor() {
    const index = values.indexOf(cm['preference'] || cm.preference)
    if (index === -1) {
      cm.preference = values[0]
    } else {
      const nextIndex = (index + 1) % values.length
      cm.preference = values[nextIndex]
    }
  }
  return {
    preference: computed(() => cm.preference),
    value: computed(() => cm.value),
    switchColor
  }
}
