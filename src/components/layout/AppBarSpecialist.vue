<template>
  <v-app-bar fixed class="white">
    <v-toolbar-title class="ml-5 text-h6">
      <span class="font-weight-black"> True Vision</span>
      - Especialista</v-toolbar-title
    >

    <v-spacer />
    <!-- Navigation tabs -->
    <v-tabs
      align-with-title
      v-model="tab"
      color="primary"
      style="width: auto"
      right
      optional
    >
      <v-tab
        v-for="(link, index) in navLinks"
        :key="`app-bar-main-navlink-${index}`"
        class="grey--text text--darken-4 text-body-1 font-weight-bold"
        :to="{ name: link.to }"
      >
        {{ link.title }}
      </v-tab>
    </v-tabs>
    <!-- / Navigation tabs -->

    <div class="text-body-1 font-weight-bold">
      Jhon A.
      <v-avatar>
        <v-icon color="grey darken-3" dark large> mdi-account-circle </v-icon>
      </v-avatar>
    </div>
  </v-app-bar>
</template>
 
 <script>
import { ROUTES } from "/src/router/names";
export default {
  name: "AppBarspecialist",
  data: () => ({
    tab: null,
    navLinks: [
      {
        title: "Inicio",
        to: ROUTES.HOME,
      },
      {
        title: "Pacientes",
        to: ROUTES.SPECIALIST__PATIENT_LIST,
      },
    ],
  }),
};
</script>