<template>
  <footer />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    links: {
      type: Array,
      default: () => [],
    }
  }
})
</script>
