<script lang="ts">
import DefaultButton from "@/components/buttons/DefaultButton.vue";
import Navlink from "@/components/navbar/Navlink.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "nav-bar",
  components: {Navlink, DefaultButton},
})
</script>

<template>
  <nav class="flex flex-row items-center justify-between p-8">
    <img alt="MDS Logo" src="../../../public/images/mds-logo.png"/>
    <ul class="flex flex-row">
      <Navlink :isActive="true" class="nav-link" href="#" text="Accueil"/>
      <Navlink href="#" text="Les programmes"/>
      <Navlink href="#" text="Notre blog"/>
    </ul>
    <DefaultButton href="#" text="M'inscrire"/>
  </nav>
</template>
