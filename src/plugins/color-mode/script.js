const w = window
const d = document
const de = d.documentElement

const knownColorSchemes = ['dark', 'light']

const preference = w.localStorage.getItem('gridsome-color-mode') || 'system'
let value = preference === 'system' ? getColorScheme() : preference
const forcedColorMode = d.body.getAttribute('data-color-mode-forced')
if (forcedColorMode) {
  value = forcedColorMode
}

addClass(value)

w['__GRIDSOME_COLOR_MODE__'] = {
  preference,
  value,
  getColorScheme,
  addClass,
  removeClass
}

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
