<script>
export default {
  beforeRouteEnter(to, from, next) {
    next({ path: `${to.fullPath}/prologue/introduction/` })
  },
}
</script>
