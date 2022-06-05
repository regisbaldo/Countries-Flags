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
        .$get(`region/${region}?fields=cca2,flags,name`)
        .catch(() => {
          error({ statusCode: 404, message: "Country not found" });
        });

      if (countries) {
        countries = countries.reduce((total, country) => {
          total.push({
            name: country.name.common,
            img: country.flags.png,
            cca2: country.cca2,
          });
          return total;
        }, []);
      }
    }
    return { region, countries };
  },
};
</script>
