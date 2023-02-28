<script lang="ts">

import EllipsisImage from "@/components/images/EllipsisImage.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "jumbotron-team",
  components: {EllipsisImage},
})
</script>

<template>
  <div class="w-full">
    <div class="flex justify-center relative gap-8">
      <EllipsisImage src="/src/assets/images/person1.png" alt="Person 1"  />
      <EllipsisImage class="mt-14" src="/src/assets/images/person2.png" alt="Person 2"  />
      <EllipsisImage class="mt-14" src="/src/assets/images/person3.png" alt="Person 3"  />
      <EllipsisImage src="/src/assets/images/person4.png" alt="Person 4"  />
    </div>
  </div>
</template>

