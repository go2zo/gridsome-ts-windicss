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
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
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
