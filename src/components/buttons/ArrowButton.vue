<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ArrowButton",
  props: {
    orientation: {type: String},
    canPress: {type: Boolean, required: true},
    onPress: {type: Function}
  }
})
</script>

<template>
  <button :class="orientation === 'left' ? 'rotate-180' : ''" @click="onPress">
    <svg :class="canPress ? 'text-primary' : 'text-grey'" class="w-16 h-16" fill="none"
         stroke="currentColor"
         stroke-width="1.5"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round"
            stroke-linejoin="round"/>
    </svg>
  </button>
</template>
