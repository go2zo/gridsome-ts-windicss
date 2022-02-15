<template>
  <button
    slot="placeholder"
    class="d-icon"
    aria-label="Color Mode"
    @click="switchColor"
  >
    <ClientOnly>
      <IconSun
        v-if="preference === 'light'"
        :class="iconClass"
      />
      <IconMoon
        v-else-if="preference === 'dark'"
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
import { defineComponent } from '@vue/composition-api'
import IconSun from '@/assets/icons/sun.svg'
import IconMoon from '@/assets/icons/moon.svg'
import IconSystem from '@/assets/icons/system.svg'
import { useColorMode } from '@/composable'

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
    const { preference } = useColorMode()

    const switchColor = () => {
      const index = values.indexOf(preference.value)

      if (index === -1) {
        preference.value = values[0]
      } else {
        const nextIndex = (index + 1) % values.length
        preference.value = values[nextIndex]
      }
    }

    return {
      preference,
      switchColor
    }
  },
})
</script>
