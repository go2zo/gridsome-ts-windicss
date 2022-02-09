// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/style/index.css'


export default function (Vue, { head }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.bodyAttrs = { class: 'm-0 w-full transition duration-300 box-border' }
}
