<script lang="ts">
import DefaultButton from "@/components/buttons/DefaultButton.vue";
import JumbotronTeam from "@/components/jumbotron/JumbotronTeam.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "jumbotron",
  components: {JumbotronTeam, DefaultButton}
})
</script>

<template>
  <div class="w-full flex flex-col items-center">
    <h1 class="font-extrabold text-[70px] leading-[70px] text-center w-[800px]">La meilleure école des métiers du digital</h1>
    <DefaultButton class="text-center mt-7" text="Appelez-nous" href="#"/>
    <JumbotronTeam class="mt-[136px]"/>
  </div>
</template>

