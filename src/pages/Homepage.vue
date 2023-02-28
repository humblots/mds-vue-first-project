<script lang="ts">
import Jumbotron from "@/components/jumbotron/Jumbotron.vue";
import CampusSection from "@/components/Campus/CampusSection.vue";
import Specialities from "@/components/specialities/Specialities.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "homepage",
  components: {Specialities, CampusSection, Jumbotron}
})
</script>

<template>
  <main>
    <Jumbotron />
    <CampusSection />
    <Specialities />
  </main>
</template>