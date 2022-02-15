import { ref, watch } from '@vue/composition-api'
import defu from 'defu'

export const useColorMode = (moduleOptions) => {
  // Global variable minimizers
  const w = window
  const d = document
  const de = d.documentElement
  const ls = w.localStorage

  const defaults = {
    preference: 'system',
    storageKey: 'gridsome-color-mode',
    fallback: 'light',
  }

  const knownColorSchemes = ['dark', 'light']

  const options = defu(moduleOptions, defaults)

  const preference = ref(ls.getItem(options.storageKey) || options.preference)
  let value = preference.value === 'system' ? getColorScheme() : preference.value
  const forcedColorMode = d.body.getAttribute('data-color-mode-forced')
  if (forcedColorMode) {
    value = forcedColorMode
  }

  addClass(value)

  function addClass(value) {
    console.log('added ' + value)
    if (de.classList) {
      de.classList.add(value)
    } else {
      de.className += ' ' + value
    }
  }

  function removeClass(value) {
    if (de.classList) {
      de.classList.remove(value)
    } else {
      de.className = de.className.replace(new RegExp(value, 'g'), '')
    }
  }

  function prefersColorScheme (suffix) {
    return w.matchMedia('(prefers-color-scheme' + suffix + ')')
  }

  function getColorScheme () {
    if (w.matchMedia && prefersColorScheme('').media !== 'not all') {
      for (const colorScheme of knownColorSchemes) {
        if (prefersColorScheme(':' + colorScheme).matches) {
          return colorScheme
        }
      }
    }

    return options.fallback
  }

  const darkQuery = prefersColorScheme('dark')
  darkQuery.addEventListener('change', (e) => preference.value = e.matches ? 'dark' : 'light')

  watch(
    preference,
    (newValue, oldValue) => {
      removeClass(oldValue)
      addClass(newValue)
      try {
        ls.setItem(options.storageKey, newValue)
      } catch (err) {
        /* eslint-disable no-empty */
      }
    }
  )

  return {
    preference
  }
}
