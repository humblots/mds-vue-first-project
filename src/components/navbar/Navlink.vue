<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "nav-link",
  props: {
    href: {
      type: String, required: true
    },
    text: {
      type: String, required: true
    },
    isActive: {
      type: String, required: true
    },
  }
})
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