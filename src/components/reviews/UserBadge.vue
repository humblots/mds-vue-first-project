<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "UserBadge",
  props: {
    name: {type: String, required: true},
    picture: {type: String, required: true},
    status: {type: String, required: true},
  }
})
</script>

<template>
  <div class="flex items-center gap-4">
    <img :src="picture" class="w-[52px] h-[52px] rounded-[12px]"/>
    <div>
      <p class="font-bold">{{ name }}</p>
      <p class="text-grey">{{ status }}</p>
    </div>
  </div>
</template>