<template>
  <button class="transition-colors duration-200 d-icon">
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
