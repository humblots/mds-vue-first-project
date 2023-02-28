<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "blog-card",
  props: {
    title: {type: String, required: true},
    publishedAt: {type: String, required: true},
    src: {type: String, required: true},
  }
})
</script>

<template>
  <div class="bg-white rounded-[20px] w-[277px] h-80 p-8">
    <img :alt="title" :src="src" class="mb-[25px]"/>
    <p class="text-sm mb-1">Posté le {{ publishedAt }}</p>
    <h4 class="font-bold text-lg leading-[25px]">{{ title }}</h4>
  </div>
</template>