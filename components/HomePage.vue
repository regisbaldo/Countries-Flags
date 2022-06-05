<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" md="4" lg="4">
        <v-select
          color="purple darken-3"
          :value="selectedOption"
          v-model="selectedOption"
          :items="options"
          label="Filtrar por"
        />
      </v-col>

      <v-col cols="12" xs="12" md="4" lg="4">
        <v-text-field
          label="Digite..."
          v-if="typeOfSearch.type == 'text'"
          v-model="search"
          @keydown.enter="handleSearchByEnterkeyUp()"
        />

        <v-select
          color="purple darken-3"
          v-else
          v-model="selectedRegion"
          :items="listOfRegions"
          label="Região"
        />
      </v-col>
      <v-col cols="12" xs="12" md="1" lg="1" class="text-right">
        <v-btn
          color="purple darken-3"
          :disabled="isButtonDisabled"
          :loading="onLoading"
          @click="handleSearch()"
        >
          <span class="white--text"> PESQUISAR </span>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="4"
        v-for="(country, i) in paginate.data"
        :key="i"
      >
        <flag :flag="country" />
      </v-col>
    </v-row>
    <v-alert
      :value="alert"
      class="mt-5"
      elevation="12"
      outlined
      text
      color="purple"
      dismissible
    >
      <span>Nenhum país encontado</span>
    </v-alert>
    <v-pagination
      class="mt-10"
      v-if="paginate.data.length > 0"
      color="purple darken-3"
      v-model="currentPaginate"
      :length="paginate.totalPages"
      :value="currentPaginate"
    />
  </v-container>
</template>

<script>
import { regions } from "../utils/listOfRegions";
import { paginator } from "../utils/paginate";

export default {
  name: "HomePage",
  props: {
    searchedRegion: {
      type: String,
    },
    searchedCountries: {
      type: Array,
    },
  },
  data() {
    return {
      alert: false,
      currentPaginate: 1,
      countries: this.searchedCountries || [],
      onLoading: false,
      search: "",
      listOfRegions: regions,
      selectedRegion: this.searchedRegion || "Asia",
      selectedOption: this.searchedRegion ? "region" : "name",
      options: [
        {
          value: "region",
          text: "Região",
          resource: "/region/",
        },
        {
          value: "capital",
          text: "Capital",
          resource: "/capital/",
        },
        {
          value: "lang",
          text: "Lingua",
          resource: "/lang/",
        },
        {
          value: "name",
          text: "País",
          resource: "/name/",
        },
      ],
    };
  },
  computed: {
    isButtonDisabled() {
      let disabled = false;
      if (this.typeOfSearch.type == "text")
        disabled = this.typeOfSearch.value === "";

      return disabled;
    },
    paginate() {
      return this.paginator(this.countries, this.currentPaginate, 12);
    },
    typeOfSearch() {
      const { resource } = this.options.find(
        (option) => option.value === this.selectedOption
      );
      return this.selectedOption == "region"
        ? {
            resource,
            type: "region",
            value: this.selectedRegion,
          }
        : {
            resource,
            type: "text",
            value: this.search,
          };
    },
  },
  methods: {
    handleSearchByEnterkeyUp() {
      if (this.search !== "") {
        this.handleSearch();
      }
    },
    paginator,
    handleSearch() {
      this.onLoading = true;
      this.countries = [];
      this.$axios
        .$get(`${this.typeOfSearch.resource}/${this.typeOfSearch.value}`)
        .then((response) => {
          this.countries = response.reduce((total, country) => {
            total.push({
              name: country.name.common,
              img: country.flags.png,
              cca2: country.cca2,
            });
            return total;
          }, []);

          this.alert = false;
        })
        .catch(() => {
          this.alert = true;
        })
        .finally(() => {
          this.onLoading = false;
        });
    },
  },
};
</script>

<style></style>
