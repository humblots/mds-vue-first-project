<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "campus",
  props: {
    src: {type: String, required: true},
    studentCount: {type: Number, required: true}
  }
})
</script>

<template>
  <div class="flex flex-col items-center">
    <img class="w-32 h-11 object-contain" :src="src" />
    <p class="text-darkgrey uppercase text-xl font-bold">{{studentCount}} étudiants</p>
  </div>
</template>
