<script lang="ts">
import {defineComponent} from "vue";
import UserBadge from "@/components/reviews/UserBadge.vue";

export default defineComponent({
  name: "ReviewCard",
  components: {UserBadge},
  props: {
    username: {type: String, required: true},
    userPicture: {type: String, required: true},
    userStatus: {type: String, required: true},
    text: {type: String, required: true},
    publishedAt: {type: String, required: true},
  }
})
</script>

<template>
  <div class="box-shadow w-[560px] p-8 rounded-[20px]">
    <UserBadge :name="username" :picture="userPicture" :status="userStatus" class="mb-[28px]"/>
    <p class="mb-[39px]">{{ text }}</p>
    <p class="text-sm font-bold">{{ publishedAt }}</p>
  </div>
</template>
