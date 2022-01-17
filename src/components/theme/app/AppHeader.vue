<template>
  <header
    class="sticky z-20 top-0 bg-transparent border-b flex-nowrap transition-colors duration-300 ease-linear"
  >
    <div class="p-0.5 text-center text-white text-base bg-gradient-to-r from-green-500 via-blue-400 to-red-500" />
    <div
      class="container flex gap-32 px-0 py-6 min-h-14"
    >
      <nav class="flex-nowrap flex items-center gap-4">
        <g-link v-for="(link, index) in links" :key="index" class="pt-5px pb-10px text-current" :to="link.slug">{{
          link.title
        }}</g-link>
      </nav>
    </div>
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
