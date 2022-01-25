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
  allDocPage {
    edges {
      node {
        title
        to: path
      }
    }
  }
}
</page-query>

<script lang="ts">
import { defineComponent, provide, reactive, computed } from '@vue/composition-api';
import docLinks from '@/data/doc-links.yaml'
import { usePageQuery } from '@/lib/vue-utils';

export default defineComponent({
  setup() {
    const $page = usePageQuery<{allDocPage}>()
    const links = computed(() => $page.value.allDocPage)
    let layout = reactive({
      aside: true
    })

    provide('layout', layout)
    provide('links', docLinks)

    return {
      layout,
      links
    }
  }
})
</script>
