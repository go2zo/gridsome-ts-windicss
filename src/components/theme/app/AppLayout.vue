<template>
  <div class="relative w-full">
    <AppHeader :links="headerLinks" />
    <slot />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default Vue.extend({
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => ({
    headerLinks: [
      {
        slug: '/',
        title: 'Home',
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
