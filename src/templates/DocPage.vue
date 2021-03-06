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
  allDocPage(
    filter: { published: { eq: true } }
    sortBy: "priority"
    order: ASC
  ) {
    edges {
      node {
        title
        to: path
        priority
        redirect
      }
    }
  }
}
</page-query>

<script>
import {
  defineComponent,
  provide,
  reactive,
  ref,
  onMounted,
  onBeforeUpdate
} from '@vue/composition-api'
import path from 'path'
import capitalize from 'capitalize'
import { isSamePath, withTrailingSlash } from 'ufo'
import { usePageQuery } from '@/composable';

export default defineComponent({
  setup() {
    const page = usePageQuery()
    const links = ref([])

    const updateLink = () => {
      const nodes = page.value.allDocPage.edges.map((edge) => edge.node)
      links.value = nodes.reduce((acc, cur) => {
        // 부모 경로 얻기
        let paths = cur.to.split('/').filter(e => e).slice(0, -1)
        // '/docs/' 인 경우 1 depth이므로 skip
        if (paths.length < 2) {
          return acc
        }
        let name = paths.at(paths.length - 1)
        let parent = withTrailingSlash(path.resolve(...paths))
        let pNode = nodes.find(e => isSamePath(e.to, parent))
        let index = acc.findIndex(e => isSamePath(e.to, parent))
        if (index < 0)
          index = acc.push({
            ...pNode,
            to: pNode?.to || parent,
            title: pNode?.title || capitalize.words(name),
            children: [],
            collapse: true,
            }) - 1
        acc[index].children.push(cur)
        return acc
      }, [])
    }

    onMounted(updateLink)
    onBeforeUpdate(updateLink)

    provide('layout', reactive({ aside: true }))
    provide('links', links)
  },
})
</script>
