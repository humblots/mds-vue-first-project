<script lang="ts">
import {defineComponent} from "vue";
import DefaultInput from "@/components/inputs/DefaultInput.vue";

export default defineComponent({
  name: "newsletter-section",
  components: {DefaultInput}
})
</script>

<template>
  <div class="mx-[120px]">
    <div class="bg-secondary rounded-[20px] text-white flex flex-col items-center py-[67px]">
      <h2 class="section-title text-center w-[677px] mb-[22px]">Entre ton e-mail pour recevoir le programme de
        l’école</h2>
      <p class="text-[15px] leading-[20px] text-center w-[431px] mb-[63px]">Nous t’enverrons le programme complet, et
        quelqu’un prendra contact avec toi pour savoir tes besoins</p>
      <form>
        <DefaultInput class="w-[409px]" placeholder="Entre ton adresse e-mail ici"/>
      </form>
    </div>
    <div class="triangle"></div>
  </div>
</template>