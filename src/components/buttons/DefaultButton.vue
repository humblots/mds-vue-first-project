<script setup lang="ts"></script>
<script>
export default {
  props: ['text', 'href'],
}
</script>

<template>
  <a class="bg-primary text-white py-[9px] px-8 rounded-full gap-2" :href="href">{{ text }}</a>
</template>