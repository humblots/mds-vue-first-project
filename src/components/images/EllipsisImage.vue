<script lang="ts">
export default {
  name: "ellipsis-image",
  props: ['src', 'alt'],
}
</script>

<template>
  <img class="rounded-[116px] h-[19rem] w-48" :src="src" :alt="alt" />
</template>