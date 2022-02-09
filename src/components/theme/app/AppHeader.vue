<template>
  <header class="d-header">
    <div
      class="p-0.5 text-center text-white text-base bg-gradient-to-r from-green-500 via-blue-400 to-red-500"
    />
    <div class="d-container flex items-center justify-center gap-32 px-6 py-0 min-h-14">
      <div class="flex flex-wrap">
        <Logo class="max-w-36 h-8 mr-4 md:h-9 lg:mr-0" />
      </div>
      <nav class="flex-nowrap flex flex-1 items-center gap-4">
        <g-link
          v-for="(link, index) in links"
          :key="index"
          class="pt-5px pb-10px text-current"
          :to="link.slug"
        >
          {{ link.title }}
        </g-link>
      </nav>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logo from '~/assets/images/gridsome-logo.svg'

export default {
  components: {
    Logo,
  },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
