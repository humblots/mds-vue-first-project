<script setup lang="ts"></script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'default-button',
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    }
  }
})
</script>

<template>
  <a class="bg-primary text-white py-[9px] px-8 rounded-full gap-2" :href="href">{{ text }}</a>
</template>