<template>
  <country-page :country="country" />
</template>

<script>
import { calculate } from "../../utils/paginate";
export default {
  async asyncData({ params, error, $axios }) {
    const country = await $axios
      .$get(
        `alpha/${params.slug}?fields=cca2,name,flags,capital,region,subregion,population,languages,borders`
      )
      .catch(() => {
        error({ statusCode: 404, message: "Post not found" });
      });

    if (country.borders.length > 0) {
      country.borders = await $axios
        .$get(`alpha?codes=${country.borders.join(",")}&fields=name,flags,cca2`)
        .catch(() => {
          error({ statusCode: 404, message: "Post not found" });
        });
    }

    return { country };
  },
};
</script>

<style></style>
