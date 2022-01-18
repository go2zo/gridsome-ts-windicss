<template>
  <header class="sticky z-20 top-0 bg-transparent border-b flex-nowrap">
    <div
      class="p-0.5 text-center text-white text-base bg-gradient-to-r from-green-500 via-blue-400 to-red-500"
    />
    <div class="container flex gap-32 px-6 py-0 min-h-14">
      <div class="flex items-center flex-1 justify-center lg:justify-start">
        <Logo class="h-8 mr-4 md:h-9 lg:mr-0" />
      </div>
      <nav class="flex-nowrap flex items-center gap-4">
        <g-link
          v-for="(link, index) in links"
          :key="index"
          class="pt-5px pb-10px text-current"
          :to="link.slug"
          >{{ link.title }}</g-link
        >
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
