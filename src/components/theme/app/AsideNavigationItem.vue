<template>
  <li :class="{ active: isActive }">
    <h5
      v-if="title"
      class="d-aside-title"
      :class="{'lg:hover:d-primary-text-hover': !isActive}"
    >
      {{ title }}
    </h5>
    <ul
      v-if="!collapse || isActive"
      class="mb-2 ml-2"
    >
      <li
        v-for="doc of docs"
        :key="doc.to"
      >
        <g-link
          :to="doc.redirect || doc.to"
          class="block w-full"
          :class="[isLinkActive(doc.to) ? 'd-active-aside-navigation-item-text' : 'd-secondary-text hover:d-secondary-text-hover']"
        >
          <span class="relative inline-flex items-center justify-between px-2 py-1 rounded-md">{{ doc.title }}</span>
        </g-link>
      </li>
    </ul>
  </li>
</template>

<script>
import { isSamePath } from 'ufo'

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
      return this.docs.some(document => isSamePath(document.to, this.$route.path))
    },
  },
  methods: {
    isLinkActive(to) {
      console.log(isSamePath(this.$route.path, to))
      return isSamePath(this.$route.path, to)
    }
  }
}
</script>
