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

<script>
export default {
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
}
</script>
