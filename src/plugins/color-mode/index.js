import './script'

const storageKey = 'gridsome-color-mode'
const colorMode = window['__GRIDSOME_COLOR_MODE__']

export default function install(Vue) {
  const data = {
    preference: colorMode.preference,
    value: colorMode.value,
    unknown: false
  }

  const $colorMode = new Vue({
    data,
    watch: {
      preference(_preference) {
        if (this.forced) {
          return
        }
        if (_preference === 'system') {
          this.value = colorMode.getColorScheme()
          this._watchMedia()
        } else {
          this.value = _preference
        }

        this._storePreference(_preference)
      },
      value (newValue, oldValue) {
        colorMode.removeClass(oldValue)
        colorMode.addClass(newValue)
      }
    },
    created () {
      if (this.preference === 'system') {
        this._watchMedia()
      }
    },
    mounted () {
      if (window.localStorage) {
        this._watchStorageChange()
      }
    },
    methods: {
      _watchMedia () {
        if (this._darkWatcher || !window.matchMedia) {
          return
        }

        this._darkWatcher = window.matchMedia('(prefers-color-scheme: dark)')
        this._darkWatcher.addListener(() => {
          if (!this.forced && this.preference === 'system') {
            this.value = colorMode.getColorScheme()
          }
        })
      },
      _watchStorageChange () {
        window.addEventListener('storage', (e) => {
          if (e.key === storageKey) {
            this.preference = e.newValue
          }
        })
      },
      _storePreference (preference) {
        // Local storage to sync with other tabs
        window.localStorage.setItem(storageKey, preference)
      }
    }
  })

  Object.defineProperty(Vue.prototype, '$colorMode', {
    get() { return $colorMode }
  })
  Object.defineProperty(Vue, '$colorMode', {
    get() { return $colorMode }
  })
}
