<template>
  <Layout>
    <div>
      <div>
        <h1>Blog</h1>
        <p>Excerot</p>
      </div>
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        date(format: "D. MMM YYYY")
        timeToRead
        excerpt
        content
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/theme/blog/PostCard.vue'

export default {
  components: {
    PostCard,
  },
}
</script>
