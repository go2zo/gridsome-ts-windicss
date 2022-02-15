<template>
  <button
    slot="placeholder"
    class="d-icon"
    aria-label="Color Mode"
    @click="switchColor()"
  >
    <ClientOnly>
      <IconSun
        v-if="current === 'light'"
        :class="iconClass"
      />
      <IconMoon
        v-else-if="current === 'dark'"
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
import { defineComponent, ref, onMounted } from '@vue/composition-api'
import IconSun from '@/assets/icons/sun.svg'
import IconMoon from '@/assets/icons/moon.svg'
import IconSystem from '@/assets/icons/system.svg'

export default defineComponent({
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
  setup() {
    const values = ['system', 'light', 'dark']
    const current = ref('system')

    const switchColor = () => {
      const currentIndex = values.indexOf(current.value)
      const nextIndex = (currentIndex + 1) % values.length
      window.__setPreferredTheme(values[nextIndex])
      current.value = values[nextIndex]
      // const index = values.indexOf(colorMode.preference)

      // if (index === -1) {
      //   colorMode.preference = values[0]
      // } else {
      //   const nextIndex = (index + 1) % values.length
      //   colorMode.preference = values[nextIndex]
      // }
    }

    onMounted(() => {
      if (window.__theme) {
        current.value = window.__theme
      }
    })

    return {
      current,
      switchColor
    }
  },
})
</script>
