<template>
  <header>
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <nav>
      <g-link v-for="(link, index) in links" :key="index" :to="link.slug">{{
        link.title
      }}</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
