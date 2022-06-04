<template>
  <v-app light>
    <v-app-bar fixed app>
      <NuxtLink to="/">
        <v-img max-height="70" max-width="70" :src="img"></v-img
      ></NuxtLink>
      <v-spacer />
      <v-btn v-if="isNotHomeRoute" to="/" outlined tile color="purple darken-3">
        <v-icon left color="purple darken-3">mdi-arrow-left-bottom</v-icon>
        Voltar
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="pt-md-16">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      img: require("../assets/logo_principal.svg"),
    };
  },
  computed: {
    isNotHomeRoute() {
      return this.$nuxt.$route.name !== "index";
    },
  },
};
</script>

<style scoped>
html {
  font-family: "Montserrat", sans-serif;
}
</style>
