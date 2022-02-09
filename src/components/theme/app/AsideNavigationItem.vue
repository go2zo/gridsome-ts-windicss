<template>
  <li :class="{ active: isActive }">
    <h5
      v-if="title"
      class="d-aside-title"
      :class="[isActive ? '' : 'lg:hover:d-primary-text-hover']"
    >
      {{ title }}
    </h5>
    <ul>
      <li
        v-for="doc of docs"
        :key="doc.to"
      >
        <g-link
          :to="doc.redirect || doc.to"
          class="block w-full"
        >
          <span>{{ doc.title }}</span>
        </g-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    docs: {
      type: Array,
      required: true,
    },
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isActive() {
      return this.docs.some(document => document.to === this.$route.path )
    },
  },
}
</script>
