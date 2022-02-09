<template>
  <Card :link="post.path">
    <h3>{{ post.title }}</h3>
    <p>{{ post.excerpt }}</p>
    <PostMeta :post="post" />
  </Card>
</template>

<script>
import Card from '~/components/molecules/forms/Card.vue'
import PostMeta from '~/components/theme/blog/PostMeta.vue'

export default {
  components: {
    Card,
    PostMeta,
  },
  props: {
    post: {
      type: Object,
      require: true,
      default: () => ({})
    },
  },
}
</script>
