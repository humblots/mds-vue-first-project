<script lang="ts">
import {defineComponent} from "vue";
import ReviewCard from "@/components/reviews/ReviewCard.vue";
import ArrowButton from "@/components/buttons/ArrowButton.vue";

export default defineComponent({
  name: "ReviewSection",
  components: {ArrowButton, ReviewCard}
})
</script>

<template>
  <div class="mx-[120px]">
    <div class="flex justify-between items-center mb-[77px]">
      <h1 class="section-title w-[451px]">Qu’est-ce que nos alumnis en pensent ?</h1>
      <div>
        <ArrowButton :can-press="false" orientation="left"/>
        <ArrowButton :can-press="true"/>
      </div>
    </div>
    <div class="flex justify-between">
      <ReviewCard
          published-at="Mars 2022"
          text="J’ai passé clairement mes 2 meilleurs années scolaires à  MyDigitalSchool.
          L’ambiance, les intervenants et les locaux m’ont permis de m’épanouir,
          gros big up pour la connexion internet ! ❤️"
          user-picture="/images/user1.png"
          user-status="Étudiant en 2015"
          username="Mélanie"/>

      <ReviewCard
          published-at="Juin 2017"
          text="J’ai passé clairement mes 2 meilleurs années scolaires à  MyDigitalSchool.
          L’ambiance, les intervenants et les locaux m’ont permis de m’épanouir,
          gros big up pour la connexion internet ! ❤️"
          user-picture="/images/user2.png"
          user-status="Étudiante en 2015"
          username="Léo"/>
    </div>
  </div>
</template>
