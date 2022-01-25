<template>
  <AppLayout>
    <slot />
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AppLayout from '~/components/theme/app/AppLayout.vue'

export default defineComponent({
  components: {
    AppLayout,
  },
})
</script>
