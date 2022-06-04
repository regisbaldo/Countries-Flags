<template>
  <nuxt-link :to="`/country/${cca2}`">
    <v-img :aspect-ratio="16 / 9" :src="img" :alt="`Flag of ${name}`" />
  </nuxt-link>
</template>

<script>
export default {
  name: "Flag",
  props: {
    cca2: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
