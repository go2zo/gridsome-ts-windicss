<template>
  <Layout>
    <div>
      <div></div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post: blogPost(id: $id) {
    title
    date(format: "D. MMM YYYY")
    timeToRead
    content
    excerpt
  }
}
</page-query>
