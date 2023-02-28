<script lang="ts">
import Jumbotron from "@/components/jumbotron/Jumbotron.vue";
import CampusSection from "@/components/campus/CampusSection.vue";
import Specialities from "@/components/specialities/Specialities.vue";
import {defineComponent} from "vue";
import BlogSection from "@/components/blog/BlogSection.vue";
import ReviewSection from "@/components/reviews/ReviewSection.vue";
import NewsletterSection from "@/components/newsletter/NewsletterSection.vue";

export default defineComponent({
  name: "homepage",
  components: {NewsletterSection, ReviewSection, BlogSection, Specialities, CampusSection, Jumbotron}
})
</script>

<template>
  <main class="mb-24">
    <Jumbotron class="mt-28"/>
    <CampusSection class="mt-48"/>
    <Specialities class="mt-[260px]"/>
    <BlogSection class="mt-[134px]"/>
    <ReviewSection class="mt-[123px]"/>
    <NewsletterSection class="mt-[170px]"/>
  </main>
</template>