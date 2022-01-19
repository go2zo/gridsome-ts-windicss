<template>
  <AppLayout>
    <slot />
  </AppLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import AppLayout from '~/components/theme/app/AppLayout.vue'

export default Vue.extend({
  components: {
    AppLayout,
  },
})
</script>
