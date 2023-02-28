<script lang="ts" setup></script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'submit-button',
  props: {
    text: {
      type: String,
      required: true,
    },
    onPress: {
      type: Function
    }
  }
})
</script>

<template>
  <button class="bg-primary text-white py-[9px] px-8 rounded-full gap-2" type="submit">{{ text }}</button>
</template>