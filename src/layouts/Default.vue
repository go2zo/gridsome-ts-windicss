<template>
  <AppLayout>
    <slot />
  </AppLayout>
</template>

<script>
import AppLayout from '~/components/theme/app/AppLayout.vue'

export default {
  components: {
    AppLayout,
  },
}
</script>
