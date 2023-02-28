<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "circle-dot",
  props: {
    radius: {type: Number, required: true},
    top: {type: Number, required: true},
    left: {type: Number, required: true},
    color: {type: String, required: true},
  }
})
</script>

<template>
  <div :class="`
    absolute w-[${radius}px]
    h-[${radius}px]
    bg-[${color}]
    rounded-full
    top-[${top}px]
    left-[${left}px]
  `"></div>
</template>
