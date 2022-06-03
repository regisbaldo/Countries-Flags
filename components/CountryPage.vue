<template>
  <div>
    <Flag :img="country.flags.png" :id="country.cca2" />
    <CountryInfo
      :name="country.name.common"
      :capital="country.capital[0]"
      :region="country.region"
      :subRegion="country.subRegion"
      :population="country.population"
      :languages="country.languages"
    />
    <div class="list-of-flags">
      <Flag
        v-for="(flag, i) in paginate.data"
        :key="i"
        :id="flag.cca2"
        :img="flag.flags.png"
      />
    </div>

    <v-pagination
      v-model="currentPaginate"
      :length="paginate.total_pages"
      :value="currentPaginate"
    />
  </div>
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
  watch: {
    currentPaginate(page) {
      console.log(page);
    },
  },
};
</script>

<style></style>
