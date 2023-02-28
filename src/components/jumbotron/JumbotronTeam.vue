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
      <EllipsisImage alt="Person 1" src="/public/images/person1.png"/>
      <EllipsisImage alt="Person 2" class="mt-14" src="/public/images/person2.png"/>
      <EllipsisImage alt="Person 3" class="mt-14" src="/public/images/person3.png"/>
      <EllipsisImage alt="Person 4" src="/public/images/person4.png"/>
    </div>
  </div>
</template>

