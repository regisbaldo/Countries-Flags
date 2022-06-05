<template>
  <article>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="5" lg="5">
        <flag :flag="country" />
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="7" lg="7">
        <p>Nome: {{ country.name }}</p>
        <p>Capital: {{ country.capital[0] }}</p>
        <p>
          Região:
          <NuxtLink :to="`/?region=${country.region}`">{{
            country.region
          }}</NuxtLink>
        </p>
        <p>Sub-região: {{ country.subregion }}</p>
        <p>População: {{ country.population }}</p>
        <p>Línguas: {{ formatedLanguages }}</p>
      </v-col>
    </v-row>
  </article>
</template>

<script>
export default {
  name: "CountryInfo",
  computed: {
    formatedLanguages() {
      return Object.values(this.country.languages).join(", ");
    },
  },
  props: {
    country: {
      type: Object,
    },
  },
};
</script>

<style></style>
