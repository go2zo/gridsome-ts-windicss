<template>
  <Card :link="post.path">
    <h3 v-html="post.title" />
    <p v-html="post.excerpt" />
    <PostMeta :post="post" />
  </Card>
</template>

<script>
import Card from '~/components/molecules/cards/Card.vue'
import PostMeta from '~/components/theme/blog/PostMeta.vue'

export default {
  components: {
    Card,
    PostMeta,
  },
  props: {
    post: { type: Object, require: true },
  },
}
</script>
