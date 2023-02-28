<script lang="ts">
import {defineComponent} from "vue";
import BlogCard from "@/components/blog/BlogCard.vue";

export default defineComponent({
  name: "blog-section",
  components: {BlogCard}
})
</script>

<template>
  <div class="bg-secondary flex flex-col items-center pb-[122px]">
    <h1 class="text-white text-center font-extrabold leading-[50px] text-[41px] w-[580px] mt-[79px]">
      MyDigitalSchool, c’est aussi un blog avec des conseils</h1>
    <div class="flex justify-center gap-8 mt-[61px]">
      <BlogCard published-at="4 mars" src="/src/assets/images/blog1.png" title="Comment devenir développeur web"/>
      <BlogCard published-at="5 avril" src="/src/assets/images/blog2.png"
                title="UX vs UI Design, quelle est la différence ?"/>
      <BlogCard published-at="9 avrirl" src="/src/assets/images/blog3.png"
                title="Top 10 des métiers du digital en 2023"/>
      <BlogCard published-at="4 mars" src="/src/assets/images/blog1.png" title="Comment devenir développeur web"/>
    </div>
  </div>
</template>