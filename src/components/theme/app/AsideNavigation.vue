<template>
  <nav
    class="flex flex-col justify-start max-w-sm overflow-y-auto text-sm font-medium lg:h-[reset] h-(full-header) d-scrollbar py-4 px-4 sh:px-6 lg:pr-0 lg:pt-8"
  >
    <!-- TODO: Back link -->
    <!-- <g-link /> -->

    <!-- Link list -->
    <ul>
      <template v-for="link in links">
        <AsideNavigationItem
          v-if="link.nested !== false && link.children && link.children.length"
          :key="link.to"
          :title="link.title"
          :docs="link.children"
          :collapse.sync="link.collapse"
        />
        <AsideNavigationItem
          v-else
          :key="link.to"
          :docs="[link]"
        />
      </template>
    </ul>
  </nav>
</template>

<script>
import { defineComponent, inject } from '@vue/composition-api'
import AsideNavigationItem from './AsideNavigationItem.vue'

export default defineComponent({
  components: {
    AsideNavigationItem,
  },
  setup() {
    const links = inject('links', {})

    return {
      links,
    }
  },
})
</script>
