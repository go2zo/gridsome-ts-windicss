<template>
  <button
    slot="placeholder"
    class="d-icon"
    aria-label="Color Mode"
    @click="switchColor"
  >
    <ClientOnly>
      <IconSun
        v-if="$colorMode.preference === 'light'"
        :class="iconClass"
      />
      <IconMoon
        v-else-if="$colorMode.preference === 'dark'"
        :class="iconClass"
      />
      <IconSystem
        v-else
        :class="iconClass"
      />
      <template #placeholder>
        ...
      </template>
    </ClientOnly>
  </button>
</template>

<script>
import IconSun from '@/assets/icons/sun.svg'
import IconMoon from '@/assets/icons/moon.svg'
import IconSystem from '@/assets/icons/system.svg'

export default {
  components: {
    IconSun,
    IconMoon,
    IconSystem,
  },
  props: {
    iconClass: {
      type: String,
      default: 'w-6 h-6 m-auto'
    }
  },
  data: () => ({
    values: ['system', 'light', 'dark']
  }),
  methods: {
    switchColor() {
      const index = this.values.indexOf(this.$colorMode.preference)

      if (index === -1) {
        this.$colorMode.preference = this.values[0]
      } else {
        const nextIndex = (index + 1) % this.values.length
        this.$colorMode.preference = this.values[nextIndex]
      }
    }
  },
}
</script>
