<script>
import DefaultButton from "@/components/buttons/DefaultButton.vue";
import Navbar from "@/components/navbar/Navbar.vue";
import Jumbotron from "@/components/jumbotron/Jumbotron.vue";

export default {
  name: "Homepage",
  components: {Jumbotron, Navbar, DefaultButton}
}
</script>

<template>
  <main>
    <Jumbotron />
  </main>
</template>

<style scoped>
</style>