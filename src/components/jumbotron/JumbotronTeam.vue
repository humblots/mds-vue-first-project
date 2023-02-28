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
    <div class="relative ">
      <span class="rounded-full bg-[#29B7C5] w-[26px] h-[26px] left-[20vw] top-[-80px] absolute"> </span>
      <span class="rounded-full bg-[#29B7C5] w-[24px] h-[24px] left-[80vw] top-[-80px] absolute"> </span>
      <span class="rounded-full bg-[#443A3A] w-[18px] h-[18px] left-[10vw] top-[80px] absolute"> </span>
      <span class="rounded-full bg-[#443A3A] w-[18px] h-[18px] left-[60vw] top-[20px] absolute"> </span>
      <span class="rounded-full bg-[#0F8793] w-[40px] h-[40px] left-[83vw] top-[210px] absolute"> </span>
      <span class="rounded-full bg-[#29B7C5] w-[17px] h-[17px] left-[66vw] top-[360px] absolute"> </span>
      <span class="rounded-full bg-[#0F8793] w-[24px] h-[24px] left-[18vw] top-[360px] absolute"> </span>
    </div>
    <div class="flex justify-center relative gap-8">
      <EllipsisImage alt="Person 1" src="/images/person1.png"/>
      <EllipsisImage alt="Person 2" class="mt-14" src="/images/person2.png"/>
      <EllipsisImage alt="Person 3" class="mt-14" src="/images/person3.png"/>
      <EllipsisImage alt="Person 4" src="/images/person4.png"/>
    </div>
  </div>
</template>

