<template>
  <div>
    <AppHeader :links="headerLinks" />
    <slot></slot>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
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
}
</script>
