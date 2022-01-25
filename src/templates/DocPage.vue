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
import Vue from 'vue'
import docLinks from '@/data/doc-links.yaml'
import type { NavigationLink } from '@/types/NavigationLink';

export default Vue.extend({
  provide() {
    return {
      layout: {
        aside: true,
      },
      links: docLinks
    }
  },
  data() {
    return {
      links: [] as NavigationLink[]
    }
  },
  mounted() {
    this.links = docLinks
  }
})
</script>
