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
import { defineComponent, inject, watch } from '@vue/composition-api'
import { isSamePath } from 'ufo'
import { useRoute } from '@/composable'
import AsideNavigationItem from './AsideNavigationItem.vue'

export default defineComponent({
  components: {
    AsideNavigationItem,
  },
  setup() {
    const route = useRoute()
    const links = inject('links', {})

    watch(
      links,
      newVal => {
        newVal.forEach(link => {
          if (link.children && link.children.length > 0) {
            const isCategoryActive = link.children.some(document => isSamePath(route.value.path, document.to))

            if (isCategoryActive) {
              link.collapse = false
            }
          }
        })
      }
    )

    return {
      links,
    }
  },
})
</script>
