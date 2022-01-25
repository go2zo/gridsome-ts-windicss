<template>
  <Layout>
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  doc: docPage(id: $id) {
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
import { defineComponent, provide } from '@vue/composition-api'
import docLinks from '@/data/doc-links.yaml'

export default defineComponent({
  setup() {
    provide('layout', {
      aside: true,
    })
    provide('links', docLinks)
  }
})
</script>
