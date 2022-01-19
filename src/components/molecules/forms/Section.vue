<template>
  <section>
    <div>
      <slot />
    </div>
    <div
      v-if="dots"
      class="dots-bg"
    />
    <slot name="outer" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    dark: Boolean,
    dots: Boolean,
    container: {
      type: String,
      default: null,
    },
    framed: Boolean,
    secondary: Boolean,
  },
})
</script>
