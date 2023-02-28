<script lang="ts">
import SpecialityCard from "@/components/specialities/SpecialityCard.vue";
import {defineComponent} from "vue";
import DefaultButton from "@/components/buttons/DefaultButton.vue";

export default defineComponent({
  name: "specialities",
  components: {DefaultButton, SpecialityCard}
})
</script>

<template>
<div class="flex flex-col items-center">
  <h1 class="text-primary text-xl font-bold text-center">Plusieurs spécialités</h1>
  <h2 class="text-[41px] leading-[50px] font-extrabold text-black w-[540px] text-center">Les domaines les plus demandés dans le digital</h2>
  <div class="flex gap-8 mt-[99px]">
    <SpecialityCard
        title="Webmarketing"
        description="Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool"
        href="#"/>
    <SpecialityCard
        title="UI & UX Design"
        description="Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool"
        href="#"/>
    <SpecialityCard
        title="Programmation"
        description="Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool"
        href="#"/>
    <SpecialityCard
        title="Communication"
        description="Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool"
        href="#"/>
  </div>
  <DefaultButton class="mt-[80px]" href="#" text="Télécharger le programme" />
</div>
</template>