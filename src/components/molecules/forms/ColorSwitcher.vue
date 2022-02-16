<template>
  <button
    slot="placeholder"
    class="d-icon"
    aria-label="Color Mode"
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
import { defineComponent, ref } from '@vue/composition-api'
import IconSun from '@/assets/icons/sun.svg'
import IconMoon from '@/assets/icons/moon.svg'
import IconSystem from '@/assets/icons/system.svg'
import { useContext } from '@/composable'

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
    const preference = ref('system')
    const { $colorMode } = useContext()

    return {
      preference,
      colorMode: $colorMode
    }
  },
})
</script>
