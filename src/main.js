// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '@/layouts/Default.vue'
import '@/assets/style/index.css'
import ColorShade from '@/plugins/color-shade'
import ColorMode from '@/plugins/color-mode'

export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(ColorShade, { primary: '#00DC82' })
  Vue.use(ColorMode)

  head.bodyAttrs = {
    // class: 'm-0 w-full transition duration-300 box-border'
    class: 'd-body-bg d-body-text-color text-root min-w-base antialiased tracking-semitight d-scrollbar min-w-xs'
  }
}
