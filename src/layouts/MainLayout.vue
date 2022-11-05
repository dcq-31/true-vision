<template>
  <v-main class="grey lighten-3">
    <AppBarMain app />
    <router-view />
    <FooterMain app />
  </v-main>
</template>

<script>
import AppBarMain from "/src/components/layout/AppBarMain";
import FooterMain from "/src/components/layout/FooterMain";

export default {
  name: "MainLayout",
  components: {
    AppBarMain,
    FooterMain,
  },
};
</script>