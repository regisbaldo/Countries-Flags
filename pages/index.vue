<template>
  <home-page :searchedRegion="region" :searchedCountries="countries" />
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ query, error, $axios }) {
    let region = null;
    let countries = null;
    if (query.region) {
      region = query.region;
      countries = await $axios
        .$get(`region/${region}?fields=cca2,flags`)
        .catch(() => {
          error({ statusCode: 404, message: "Country not found" });
        });
    }
    return { region, countries };
  },
};
</script>
