<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    next({ path: `${to.fullPath}/prologue/introduction/`})
  }
})
</script>
