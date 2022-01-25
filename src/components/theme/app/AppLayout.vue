<template>
  <div class="relative w-full">
    <AppHeader :links="headerLinks" />
    <div
      class="lg:flex"
      :class="{ 'd-container': layout.aside }"
    >
      <slot
        v-if="['xs', 'sm', 'md'].includes($mq) || layout.aside"
        name="aside"
      >
        <AppAside
          :links="headerLinks"
          :class="layout.asideClass"
        />
      </slot>
      <div class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
        <slot />
      </div>
    </div>
    <AppFooter :links="footerLinks" />
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
  inject: {
    layout: { default: {} }
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
    footerLinks: []
  })
})
</script>
