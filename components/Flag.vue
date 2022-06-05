<template>
  <nuxt-link :to="`/country/${flag.cca2}`">
    <v-img
      :aspect-ratio="16 / 9"
      :src="flag.img"
      :alt="`Flag of ${flag.name}`"
    />
  </nuxt-link>
</template>

<script>
import flagValidator from "../utils/validator/flagValidator";
export default {
  name: "Flag",
  props: {
    flag: {
      type: Object,
      required: true,
      validator: flagValidator,
    },
  },
};
</script>

<style></style>
