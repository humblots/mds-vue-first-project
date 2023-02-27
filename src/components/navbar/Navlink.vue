<script lang="ts">
export default {
  name: "nav-link",
  props: ['href', 'text', 'isActive'],
}
</script>

<template>
  <li class="nav-link">
    <a :class="isActive === 'true' ? 'text-black' : ''"  :href="href">{{text}}</a>
  </li>
</template>

<style scoped>
  .nav-link {
    @apply text-grey font-bold mx-4
  }
</style>