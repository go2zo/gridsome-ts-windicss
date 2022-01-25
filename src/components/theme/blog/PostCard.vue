<template>
  <Card :link="post.path">
    <h3>{{ post.title }}</h3>
    <p>{{ post.excerpt }}</p>
    <PostMeta :post="post" />
  </Card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Card from '@/components/molecules/forms/Card.vue'
import PostMeta from '@/components/theme/blog/PostMeta.vue'

export default defineComponent({
  components: {
    Card,
    PostMeta,
  },
  props: {
    post: { type: Object, required: true },
  },
})
</script>
