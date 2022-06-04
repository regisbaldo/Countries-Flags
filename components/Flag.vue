<template>
  <nuxt-link :to="`/country/${id}`">
    <v-img  :aspect-ratio="16/9" :src="img" :alt="`Flag of ${name}`" />
  </nuxt-link>
</template>

<script>
export default {
  name: "Flag",
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "19.75rem",
    },
    height: {
      type: String,
      default: "11.31rem",
    },
  },
};
</script>

<style></style>
