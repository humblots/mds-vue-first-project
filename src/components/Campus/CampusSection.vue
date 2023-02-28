<script lang="ts">
import Campus from "@/components/Campus/Campus.vue";
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
      <Campus src="/src/assets/images/campus1.png" student-count="2000" />
      <Campus src="/src/assets/images/campus2.png" student-count="2000" />
      <Campus src="/src/assets/images/campus3.png" student-count="2000" />
      <Campus src="/src/assets/images/campus4.png" student-count="2000" />
    </div>
  </div>
</template>
