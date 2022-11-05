 <template>
  <v-app>
    <v-main>
      <v-container fluid fill-height class="signin_container_back">
        <Personal_Info_Dialog />
        <Specialist_Info_Dialog />
        <User_Info_Dialog />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Personal_Info_Dialog from "../components/Personal_Info_Dialog.vue";
import Specialist_Info_Dialog from "../components/Specialist_Info_Dialog.vue";
import User_Info_Dialog from "../components/User_Info_Dialog.vue";

export default {
  name: "SignInView",

  components: {
    Personal_Info_Dialog,
    Specialist_Info_Dialog,
    User_Info_Dialog,
  },

  data: function () {},

  methods: {},
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: center !important;
}

h2 {
  letter-spacing: 3px;
}

h3 {
  font-size: 18px;
  color: lightgrey;
}

h6 {
  font-size: 20px;
  color: lightgray;
}

.signin_container_back {
  background: url("/public/images/header3.png") no-repeat center center fixed;
  background-size: cover;
}
</style>