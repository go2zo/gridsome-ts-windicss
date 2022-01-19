<template>
  <aside class="flex z-50 lg:z-0 lg:static">
    <div class="h-full overflow-auto pointer-events-none lg:overflow-visible">
      <!-- Desktop aside -->
      <AsideNavigation class="hidden lg:block" />
      <!-- <div class="hidden lg:block fixed top-0 left-0 overflow-auto pointer-events-auto h-screen sticky w-60">
        <div class="w-auto h-full overflow-auto"> -->
      <!-- <AsideNavigation /> -->
      <!-- </div>
      </div> -->
      <!-- TODO: Mobile aside -->
      <Transition name="slide-from-left-to-left">
        <AsideNavigation class="lg:hidden border-r" />
      </Transition>
    </div>
  </aside>
</template>

<script>
import AsideNavigation from './AsideNavigation.vue'
export default {
  components: {
    AsideNavigation
  },
  data() {
    return {
      params: null
    }
  },
  mounted() {
    this.params = this.$route.params
  }
}
</script>
