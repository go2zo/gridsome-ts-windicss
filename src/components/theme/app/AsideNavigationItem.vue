<template>
  <li :class="{ active: isActive }">
    <h5
      v-if="title"
      class="transition duration-100 font-bold py-2"
      :class="{ 'cursor-pointer hover:(text-gray-600 dark:text-gray-400)': !isActive }"
      @click="toggle"
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
          class=" transition duration-100 relative inline-flex items-center justify-between pl-3 py-1 border-l border-gray-100 dark:border-dark-400 text-sm text-gray-700 dark:text-gray-400 hover:text-primary hover:dark:text-primary"
          :class="{ '!border-primary dark:border-primary': isLinkActive(doc.to) }"
        >
          {{ doc.title }}
        </g-link>
      </li>
    </ul>
  </li>
</template>

<script>
import { defineComponent, computed, toRefs } from '@vue/composition-api'
import { isSamePath } from 'ufo'
import { useRoute } from '@/composable'

export default defineComponent({
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
  setup(props, { emit }) {
    const { collapse, docs } = toRefs(props)
    const route = useRoute()

    const isActive = computed(() => docs.value.some(document => isSamePath(document.to, route.value.path)))
    const isLinkActive = (to) => isSamePath(route.value.path, to)

    const toggle = () => emit('update:collapse', !collapse)

    return {
      isActive,
      toggle,
      isLinkActive,
    }
  },
  // computed: {
  //   isActive() {
  //     return this.docs.some(document => isSamePath(document.to, this.$route.path))
  //   },
  // },
  // methods: {
  //   isLinkActive(to) {
  //     return isSamePath(this.$route.path, to)
  //   },
  //   toggle() {
  //     this.$emit('update:collapse', !this.collapse)
  //   }
  // }
})
</script>
