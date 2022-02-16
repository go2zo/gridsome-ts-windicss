// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/style/index.css'
import { generateCSSVariables } from '~/plugins/color-shade'

export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.bodyAttrs = {
    // class: 'm-0 w-full transition duration-300 box-border'
    class: 'd-body-bg d-body-text-color text-root min-w-base antialiased tracking-semitight d-scrollbar min-w-xs'
  }

  head.style.push({
    hid: 'theme-colors',
    cssText: generateCSSVariables({ primary: '#00DC82' }),
    type: "text/css"
  })
}
