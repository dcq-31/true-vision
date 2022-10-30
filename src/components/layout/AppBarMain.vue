<template>
  <v-app-bar class="white" flat>
    <v-tabs centered v-model="tabModel" class="ml-n9" color="pink darken-4">
      <v-tab
        class="black--text"
        v-for="(link, index) in navLinks"
        :key="`app-bar-main-navlink-${index}`"
      >
        {{ link }}
      </v-tab>
    </v-tabs>

    <v-btn @click="go_login" class="mx-2" fab dark color="purple">
      <v-icon dark size="35px"> mdi-login </v-icon>
    </v-btn>
  </v-app-bar>
</template>
 
 <script>
export default {
  name: "AppBarMain",
  data: () => ({
    tabModel: 0,
    navLinks: ["Servicios", "Información", "Contacto"],
  }),
};
</script>