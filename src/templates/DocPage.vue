<template>
  <Layout>
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  doc: docPage(id: $id) {
    title
    redirect
    headings(depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
  }
  pages: allDocPage(
    filter: { published: { eq: true } }
    sortBy: "priority"
    order: ASC
  ) {
    edges {
      node {
        title
        path
        priority
        redirect
      }
    }
  }
}
</page-query>

<script>
// export default {
//   computed: {
//     links() {
//       const pages = this.$page.pages.edges
//       return pages.map(({ node }, index) => ({
//         title: node.title,
//         to: node.path
//       }))
//     }
//   },
//   provide() {
//     return {
//       layout: {
//         aside: true,
//       },
//       links: this.links
//     }
//   },
// }

import {
  defineComponent,
  getCurrentInstance,
  computed,
  provide,
  reactive,
} from '@vue/composition-api'

export default defineComponent({
  setup(props, context) {
    const { proxy } = getCurrentInstance()
    const links = computed(() =>
      proxy.$page.pages.edges.map(({ node }, index) => ({
        title: node.title,
        to: node.path,
      }))
    )

    provide('layout', reactive({ aside: true }))
    provide('links', links)

    return {
      links,
    }
  },
})
</script>
