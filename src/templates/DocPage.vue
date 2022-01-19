<template>
  <Layout>
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  doc: docsPage(id: $id) {
    title
    headings(depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<script lang="ts">
import Vue from 'vue'
import links from '@/data/doc-links.yaml'

export default Vue.extend({
  computed: {
    links () {
      return links
    },
    // subtitle () {
    //   let subtitles = this.$page.doc.subtitles.filter((value: { depth: number }) => [2,3].includes(value.depth))
    // }
  },
  // metaInfo () {
  //   const { title, headings } = this.$page.doc

  //   return {
  //     title: title || (headings.length ? headings[0].value : undefined)
  //   }
  // }
})
</script>
