<template>
  <div>
    <g-link
      v-if="link"
      :to="link"
    >
      Read more
    </g-link>
    <div v-if="title">
      <span>{{ title }}</span>
    </div>
    <div v-if="image">
      <g-image :src="image" />
    </div>
    <div>
      <slot />
    </div>
    <slot name="outer" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    link: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
  },
})
</script>
