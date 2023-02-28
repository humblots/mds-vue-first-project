<script lang="ts">
import Campus from "@/components/campus/Campus.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "campus-section",
  components: {Campus},
})
</script>

<template>
  <div>
    <h2 class="text-primary text-xl font-bold text-center">Des campus partout en France</h2>
    <div class="flex justify-center gap-12 mt-11">
      <Campus :student-count="2000" src="/images/campus1.png"/>
      <Campus :student-count="2000" src="/images/campus2.png"/>
      <Campus :student-count="2000" src="/images/campus3.png"/>
      <Campus :student-count="2000" src="/images/campus4.png"/>
    </div>
  </div>
</template>
