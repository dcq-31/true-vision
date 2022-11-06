<template>
  <v-main>
    <AppBarMain app />
    <router-view />
    <FooterMain app />
  </v-main>
</template>

<script>
import AppBarMain from "/src/components/layout/AppBarMain.vue";
import FooterMain from "/src/components/layout/FooterMain.vue";

export default {
  name: "MainLayout",
  components: {
    AppBarMain,
    FooterMain,
  },
};
</script>