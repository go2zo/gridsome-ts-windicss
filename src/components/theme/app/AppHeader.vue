<template>
  <header class="d-header">
    <div
      class="p-0.5 text-center text-white text-base bg-gradient-to-r from-green-500 via-blue-400 to-red-500"
    />
    <div class="d-container flex flex-none h-full container px-1 sm:px-3 lg:px-6">
      <div class="flex items-center lg:hidden">
        <NavigationButton class="inline-flex text-xl p-2" />
      </div>
      <div class="flex items-center flex-1">
        <Logo class="text-current max-w-36 h-8 ml-1 mr-4 md:h-9 lg:mr-0" />
      </div>
      <div class="hidden lg:flex items-center flex-1">
        <nav class="inline-flex space-x-2 px-3">
          <div
            v-for="(link, index) in links"
            :key="index"
            class="item"
          >
            <Dropdown
              v-if="link.items && link.items.length"
              :items="[link.items]"
              placement="bottom"
              mode="hover"
            >
              <template #trigger>
                <button>{{ link.title }}</button>
                <!-- <HeaderNavigationLink>{{ link.title }}</HeaderNavigationLink> -->
              </template>
              <template #item="{ item }">
                <HeaderNavigationLink :link="item" />
              </template>
            </Dropdown>
          </div>
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
      <div class="flex items-center lg:space-x-3 lg:pl-3 xl:pl-6">
        <ColorSwitcher class="inline-flex text-xl p-2" />
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
import Dropdown from '@/components/atoms/selects/Dropdown.vue'
import HeaderNavigationLink from '@/components/atoms/links/HeaderNavigationLink.vue'

export default {
  components: {
    Logo,
    NavigationButton,
    ColorSwitcher,
    Dropdown,
    HeaderNavigationLink,
  },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
