<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <component
    v-bind="linkProps"
    :key="link.slug"
  >
    <slot />
  </component>
</template>
