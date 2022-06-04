<template>
  <v-container>
    <country-info :country="country" />
    <section class="pt-16">
      <h4>Países Vizinhos :</h4>
      <v-row class="pt-8" v-if="paginate.data.length > 0">
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          v-for="(country, i) in paginate.data"
          :key="i"
        >
          <flag :id="country.cca2" :img="country.flags.png" />
        </v-col>
      </v-row>
      <p v-else>Sem países vizinhos.</p>
    </section>

    <v-pagination
      class="mt-10"
      v-if="paginate.data.length > 0"
      color="purple darken-3"
      v-model="currentPaginate"
      :length="paginate.total_pages"
      :value="currentPaginate"
    />
  </v-container>
</template>

<script>
import { paginator } from "../utils/paginate";
export default {
  name: "CountryPage",
  data() {
    return {
      currentPaginate: 1,
    };
  },
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
  computed: {
    paginate() {
      return this.paginator(this.country.borders, this.currentPaginate, 12);
    },
  },
  methods: {
    paginator,
  },
};
</script>

<style scoped></style>
