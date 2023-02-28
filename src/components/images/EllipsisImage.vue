<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ellipsis-image",
  props: {
    src: {type: String, required: true},
    alt: {type: String, required: true}
  },
})
</script>

<template>
  <img class="rounded-[116px] h-[19rem] w-48" :src="src" :alt="alt" />
</template>