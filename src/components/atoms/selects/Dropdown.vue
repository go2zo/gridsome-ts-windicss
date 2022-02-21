<template>
  <div class="relative inline-flex items-center">
    <button class="inline-flex items-center p-2">
      <span>{{ item.title }}</span>
      <IconChevronDown />
    </button>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
// import { createPopper } from '@popperjs/core'
// import { directive as onClickaway } from 'vue-clickaway'
import IconChevronDown from '@/assets/icons/chevron-down.svg'

export default defineComponent({
  components: {
    IconChevronDown,
  },
  props: {
    label: {
      type: String,
      defalut: '',
    },
    icon: {
      type: Boolean,
      defalut: true,
    },
    items: {
      type: Array,
      default: () => []
    },
    variant: {
      type: String,
      default: 'white',
    },
    size: {
      type: String,
      default: 'md',
      validateor(value) {
        return ['', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'].includes(value)
      },
    },
    mode: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].includes(value)
      },
    },
    placement: {
      type: String,
      default: 'bottom-end',
    }
  },
  setup() {
    const open = ref(false)
    const instance = ref(null)
    const openTimeout = ref(null)
    const closeTimeout = ref(null)

    return {
      open,
      instance,
      openTimeout,
      closeTimeout,
    }
  },
})
</script>
