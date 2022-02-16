// Global variable minimizers
const w = window
const d = document
const de = d.documentElement

const knownColorSchemes = ['dark', 'light']

function addClass(value) {
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

  return 'light'
}

export default {
  prefersColorScheme,
  getColorScheme,
  removeClass,
  addClass,
}
