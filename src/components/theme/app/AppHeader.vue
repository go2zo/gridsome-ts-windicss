<template>
  <header class="d-header">
    <div
      class="p-0.5 text-center text-white text-base bg-gradient-to-r from-green-500 via-blue-400 to-red-500"
    />
    <div class="d-container flex flex-none h-full container px-1 sm:px-3 lg:px-6">
      <NavigationButton class="text-xl p-2" />
      <div class="flex items-center flex-1 lg:flex-none">
        <Logo class="text-current max-w-36 h-8 ml-1 mr-4 md:h-9 lg:mr-0" />
      </div>
      <!-- <nav class="items-center flex-1 hidden lg:flex"> -->
      <nav class="flex flex-1 items-center gap-4">
        <g-link
          v-for="(link, index) in links"
          :key="index"
          class="pt-5px pb-10px text-current"
          :to="link.slug"
        >
          {{ link.title }}
        </g-link>
      </nav>

      <div class="flex items-center justify-end gap-1">
        <ColorSwitcher class="hidden lg:block" />
      </div>
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
import NavigationButton from '@/components/molecules/NavigationButton.vue'
import ColorSwitcher from '@/components/molecules/forms/ColorSwitcher.vue'

export default {
  components: {
    Logo,
    NavigationButton,
    ColorSwitcher,
  },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
