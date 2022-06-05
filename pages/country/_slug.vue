<template>
  <country-page :country="country" />
</template>

<script>
export default {
  async asyncData({ params, error, $axios }) {
    const country = await $axios
      .$get(
        `alpha/${params.slug}?fields=cca2,name,flags,capital,region,subregion,population,languages,borders`
      )
      .catch(() => {
        error({ statusCode: 404, message: "Country not found" });
      });

    if (country) {
      country.name = country.name.common;
      country.img = country.flags.png;
    }

    if (country?.borders.length > 0) {
      let borders = await $axios
        .$get(`alpha?codes=${country.borders.join(",")}&fields=name,flags,cca2`)
        .catch(() => {
          error({ statusCode: 404, message: "Post not found" });
        });
      borders = borders.reduce((total, border) => {
        total.push({
          name: border.name.common,
          img: border.flags.png,
          cca2: border.cca2,
        });
        return total;
      }, []);

      country.borders = borders;
    }

    return { country };
  },
};
</script>

<style></style>
