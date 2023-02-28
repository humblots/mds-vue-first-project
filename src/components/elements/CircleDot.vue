<script lang="ts">
import { defineComponent } from "vue";
import type Circle from "@/types/elements/Circle";

export default defineComponent({
  name: "circle-dot",
  props: {
    circle: {
      type: Object as ()=> Circle
    }
  }
})
</script>

<template>
  <div :class="`
    absolute w-[${circle.radius}px]
    h-[${circle.radius}px]
    bg-[${circle.color}]
    rounded-full
    top-[${circle.top}px]
    left-[${circle.left}px]
  `"></div>
</template>
