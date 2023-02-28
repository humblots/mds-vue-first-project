<script lang="ts">
import Jumbotron from "@/components/jumbotron/Jumbotron.vue";
import CampusSection from "@/components/Campus/CampusSection.vue";
import Specialities from "@/components/specialities/Specialities.vue";
import {defineComponent} from "vue";
import BlogSection from "@/components/blog/BlogSection.vue";
import ReviewSection from "@/components/reviews/ReviewSection.vue";

export default defineComponent({
  name: "homepage",
  components: {ReviewSection, BlogSection, Specialities, CampusSection, Jumbotron}
})
</script>

<template>
  <main>
    <Jumbotron class="mt-28"/>
    <CampusSection class="mt-48"/>
    <Specialities class="mt-[260px]"/>
    <BlogSection class="mt-[134px]"/>
    <ReviewSection class="mt-[123px]"/>
  </main>
</template>