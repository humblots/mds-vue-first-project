<script lang="ts">
import DefaultButton from "@/components/buttons/DefaultButton.vue";
import Navlink from "@/components/navbar/Navlink.vue";

export default {
  name: "nav-bar",
  components: {Navlink, DefaultButton}
}
</script>

<template>
  <nav class="flex flex-row items-center justify-between p-8">
    <img src="@/assets/images/mds-logo.png" alt="MDS Logo" />
    <ul class="flex flex-row">
      <Navlink class="nav-link" text="Accueil" href="#" isActive="true" />
      <Navlink text="Les programmes" href="#" />
      <Navlink text="Notre blog" href="#" />
    </ul>
    <DefaultButton href="#" text="M'inscrire" />
  </nav>
</template>
