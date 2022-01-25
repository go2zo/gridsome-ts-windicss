// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueMq from 'vue-mq'
import { ClientApiConstructor } from './types';
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/style/index.css'

const client: ClientApiConstructor = (Vue, { head }) => {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Use vue-mq(MediaQuery) library inside our project
  Vue.use(VueMq, {
    breakpoints: {
      xs: 640,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: Infinity,
    },
    defaultBreakpoint: 'lg'
  })

  head.bodyAttrs = { class: 'm-0 w-full transition duration-300 box-border' }
}

export default client
