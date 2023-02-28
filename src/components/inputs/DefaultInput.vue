<script lang="ts">
import {defineComponent} from "vue";
import SubmitButton from "@/components/buttons/SubmitButton.vue";

export default defineComponent({
  name: "DefaultInput",
  components: {SubmitButton},
  props: {
    placeholder: {type: String},
    submitText: {type: String}
  }
})
</script>

<template>
  <div class="relative">
    <input
        :placeholder="placeholder"
        class="w-full p-4 pl-10 text-sm text-grey border border-grey-300 rounded-full"
        required
        type="email">
    <SubmitButton class="absolute right-1.5 bottom-1.5" text="Envoyer"/>
  </div>
</template>