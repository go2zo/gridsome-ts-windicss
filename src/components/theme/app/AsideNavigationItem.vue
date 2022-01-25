<template>
  <li>
    <h5>{{ title }}</h5>
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

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import DefaultLayout from '@/layouts/Default.vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    docs: {
      type: Array,
      required: true
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const isActive = computed(() => props.docs.some)
  },
})
</script>
