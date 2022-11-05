<template>
  <v-app-bar class="white" fixed>
    <v-tabs v-model="tabModel" color="primary" centered>
      <v-tab
        v-for="(link, index) in navLinks"
        :key="`app-bar-main-navlink-${index}`"
        class="black--text text-body-1"
        @click="$vuetify.goTo(link.to)"
      >
        {{ link.title }}
      </v-tab>
    </v-tabs>
    <v-btn class="mx-2 font-weight-bold" color="primary" dark> Entrar </v-btn>
  </v-app-bar>
</template>
 
 <script>
export default {
  name: "AppBarMain",
  data: () => ({
    tabModel: 0,
    navLinks: [
      {
        title: "Nuestros Servicios",
        to: "#service",
      },
      {
        title: "Información del Centro",
        to: "#about",
      },
      {
        title: "Contáctanos",
        to: "#contact",
      },
    ],
  }),
};
</script>