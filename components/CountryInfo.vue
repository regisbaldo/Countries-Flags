<template>
  <article>
    <p>Nome: {{ name }}</p>
    <p>Capital: {{ capital }}</p>
    <p>
      Região:
      <NuxtLink
        :to="`/?region=${region}`"
        >{{ region }}</NuxtLink
      >
    </p>
    <p>Sub-região: {{ subRegion }}</p>
    <p>População: {{ population }}</p>
    <p>Linguas: {{ formatedLanguages }}</p>
  </article>
</template>

<script>
export default {
  name: "CountryInfo",
  computed: {
    formatedLanguages() {
      return Object.values(this.languages).join(", ");
    },
  },
  props: {
    name: {
      type: String,
    },
    capital: {
      type: String,
    },
    region: {
      type: String,
    },
    subRegion: {
      type: String,
    },
    population: {
      type: Number,
    },
    languages: {
      type: Object,
    },
  },
};
</script>

<style></style>
