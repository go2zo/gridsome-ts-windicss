<template>
  <nav class="flex flex-col justify-start max-w-sm overflow-y-auto text-sm font-medium">
    <ul>
      <template v-for="link in $page.links">
        <AsideNavigationItem
          v-if="link.nested !== false && link.children.length"
          :key="link.to"
          :title="link.title"
          :docs="link.children"
          :collapse.sync="link.collapse"
        />
        <AsideNavigationItem
          v-else
          :key="link.to"
          :docs="[link]"
        />
      </template>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  inject: ['links'],
})
</script>
