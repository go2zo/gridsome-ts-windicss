<template>
  <footer />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    links: {
      type: Array,
      default: () => [],
    }
  }
})
</script>
