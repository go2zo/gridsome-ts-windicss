<template>
  <button class="flex items-center justify-center transition-colors duration-200 lg:hidden d-icon">
    <IconMenuAt />
  </button>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import IconMenuAt from '@/assets/icons/menu-alt.svg'

export default defineComponent({
  components: {
    IconMenuAt
  }
})
</script>
