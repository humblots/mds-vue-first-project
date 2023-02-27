<script lang="ts">
export default {
  name: "circle-dot",
  props: ['radius', 'color', 'top', 'left'],
}
</script>

<template>
  <div class="`absolute w-[${radius}px]
    h-[${radius}px]
    bg-black
    rounded-full
    top-[${top}px]
    left-[${left}px]
    before:content-[' ']`"
  ></div>
</template>
