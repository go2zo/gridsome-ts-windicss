<template>
  <Card :link="post.path">
    <h3 v-html="post.title" />
    <p v-html="post.excerpt" />
    <PostMeta :post="post" />
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/molecules/forms/Card.vue'
import PostMeta from '~/components/theme/blog/PostMeta.vue'

export default Vue.extend({
  components: {
    Card,
    PostMeta,
  },
  props: {
    post: { type: Object, required: true },
  },
})
</script>
