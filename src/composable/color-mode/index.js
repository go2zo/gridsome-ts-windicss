import { onMounted, reactive, toRefs, watch } from '@vue/composition-api'
import colorMode from './script'

const options = {}

export const useColorMode = () => {
  const data = reactive({
    preference: 'system',
    value: 'light',
    unknown: true
  })

  if (data.preference === 'system') {
    _watchMedia()
  }

  onMounted(() => {
    if (window.localStorage) {
      _watchStoreChange()
    }
  })

  watch(() => data.preference, (preference) => {
    if (data.forced) {
      return
    }
    if (preference === 'system') {
      data.value = colorMode.getColorScheme()
      _watchMedia()
    } else {
      data.value = preference
    }

    _storePreference(preference)
  })

  watch(() => data.value, (newValue, oldValue) => {
    colorMode.removeClass(oldValue)
    colorMode.addClass(newValue)
  })

  function _watchMedia() {
    if (data._darkWatcher || !window.matchMedia) {
      return
    }

    data._darkWatcher = window.matchMedia('(prefers-color-scheme: dark)')
    data._darkWatcher.addEventListener('change', () => {
      if (!data.forced && data.preference === 'system') {
        data.value = colorMode.getColorScheme()
      }
    })
  }

  function _watchStoreChange() {
    window.addEventListener('storage', (e) => {
      if (e.key === options.storageKey) {
        data.preference = e.newValue
      }
    })
  }

  function _storePreference(preference) {
    window.localStorage.setItem(options.storageKey, preference)
  }

  return {
    ...toRefs(data),
  }
}
