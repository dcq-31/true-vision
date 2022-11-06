<template>
  <v-main>
    <AppBarSpecialist app />
    <router-view />
  </v-main>
</template>

<script>
import AppBarSpecialist from "/src/components/layout/AppBarSpecialist.vue";
export default {
  name: "SpecialistLayout",
  components: { AppBarSpecialist },
};
</script>