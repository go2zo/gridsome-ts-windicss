<template>
  <div class="relative w-full">
    <AppHeader :links="headerLinks" />
    <AppAside />
    <slot />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import AppAside from './AppAside.vue'

export default Vue.extend({
  components: {
    AppHeader,
    AppFooter,
    AppAside,
  },
  data: () => ({
    headerLinks: [
      {
        slug: '/',
        title: 'Home',
      },
      {
        slug: '/docs',
        title: 'Docs',
      },
      {
        slug: '/blog',
        title: 'Blog',
      },
      {
        slug: '/about',
        title: 'About',
      },
    ],
  }),
})
</script>
