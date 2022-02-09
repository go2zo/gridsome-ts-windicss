<template>
  <aside class="flex z-50 lg:z-0 lg:static">
    <div class="h-full overflow-auto pointer-events-none lg:overflow-visible">
      <!-- Desktop aside -->
      <div
        class="hidden lg:block fixed top-0 left-0 overflow-auto pointer-events-auto min-h-fill-available h-screen sticky top-header w-60"
      >
        <div class="w-auto h-full overflow-auto">
          <AsideNavigation />
        </div>
      </div>

      <!-- TODO: Mobile aside -->
      <Transition name="slide-from-left-to-left">
        <div
          class="lg:hidden fixed top-0 left-0 w-auto h-full overflow-auto pointer-events-auto min-h-fill-available border-r !w-base"
        >
          <div class="w-auto h-full overflow-auto">
            <AsideNavigation />
          </div>
        </div>
      </Transition>
    </div>
  </aside>
</template>

<script>
import AsideNavigation from './AsideNavigation.vue'

export default {
  components: {
    AsideNavigation,
  },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
