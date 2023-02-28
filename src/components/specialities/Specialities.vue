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
  <div class="flex flex-col items-center relative">
    <span class="rounded-full bg-[#0F8793] w-[40px] h-[40px] left-[80vw] top-[60px] absolute"> </span>
    <span class="rounded-full bg-[#29B7C5] w-[17px] h-[17px] left-[20vw] top-[50px] absolute"> </span>
    <h1 class="text-primary text-xl font-bold text-center">Plusieurs spécialités</h1>
    <h2 class="section-title text-black w-[540px] text-center">Les domaines les plus demandés dans le digital</h2>
    <div class="flex gap-8 mt-[99px]">
      <SpecialityCard
          description="Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool"
          href="#"
          title="Webmarketing"/>
      <SpecialityCard
          description="Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool"
          href="#"
          title="UI & UX Design"/>
      <SpecialityCard
          description="Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool"
          href="#"
          title="Programmation"/>
      <SpecialityCard
          description="Classée la 2ème meilleure école de France dans ce domaine, le marketing digital est la spécialité de MyDigitalSchool"
          href="#"
          title="Communication"/>
    </div>
    <DefaultButton class="mt-[80px]" href="#" text="Télécharger le programme"/>
  </div>
</template>