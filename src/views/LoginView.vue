 <template>
  <v-app>
    <v-main>
      <v-container fluid fill-height class="login_container">
        <v-overlay class="overlay">
          <div
            class="
              pa-4
              text-center text-no-wrap
              rounded-tr-xl
              login_form_div
              justify-center
              align-center
            "
          >
            <v-row class="d-flex align-center justify-center">
              <v-col
                cols="12"
                class="d-flex text-center align-center justify-center"
                :data-value="getToken"
              >
                <div class="text-center">
                  <h1 class="font-weight-bold">TRUE VISION</h1>
                  <h2 class="font-weight-bold">
                    <v-icon class="white--text" size="30px"> mdi-login </v-icon>
                    Acceder
                  </h2>
                  <br />
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    action="/dashboards/basic-dashboard/"
                  >
                    <div v-if="error">
                      <v-alert type="error" :value="alert">{{ error }}</v-alert>
                    </div>
                    <v-text-field
                      v-model="username"
                      :rules="usernameRules"
                      label="Usuario"
                      class="mt-4 inputs"
                      required
                      outlined
                      shaped
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      :counter="20"
                      :rules="passwordRules"
                      label="Contraseña"
                      required
                      outlined
                      shaped
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                      @keydown.enter="submit"
                    ></v-text-field>
                    <br />
                    <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-btn
                          :disabled="!valid"
                          block
                          class="mx-auto pa-6 purple rounded-xl inic_btn"
                          submit
                          @click="iniciar_sesion"
                          :elevation="hover ? 24 : 6"
                        >
                          Iniciar Sesión
                        </v-btn>
                      </template>
                    </v-hover>

                    <br /><br />

                    <h3>¿No tiene una cuenta en True Vision aún?</h3>

                    <br />

                    <v-btn
                      class="
                        font-weight-bold
                        transparent
                        purple--text
                        crear_cuenta_btn
                      "
                      @click="crear_cuenta"
                    >
                      Crear Cuenta
                    </v-btn>
                  </v-form>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-overlay>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "LoginView",
  data: () => ({
    valid: true,
    password: "",
    show1: false,
    error: "",
    alert: false,
    passwordRules: [
      (v) => !!v || "Contraseña requerida",
      (v) =>
        (v && v.length <= 20) ||
        "La contraseña no debe tener más de 20 caracteres",
    ],
    username: "",
    usernameRules: [(v) => !!v || "Usuario requerido"],
    checkbox: false,
  }),

  methods: {
    iniciar_sesion() {
      this.$router.push({ path: "/specialist" });
    },
    crear_cuenta() {
      this.$router.push({ path: "/signin" });
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 40px;
  color: white;
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

h2 {
  letter-spacing: 3px;
}

h3 {
  font-size: 18px;
  color: lightgrey;
}

.inputs {
  font-size: 150%;
  color: white;
}

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.login_container {
  background: url("/public/images/header3.png") no-repeat center center fixed;
  background-size: cover;
}
.login_form_div {
  height: 600px;
  width: 450px;
  background-color: rgba(0, 0, 0, 0.3);
  border-style: solid;
  border-color: rgb(183, 177, 177);
}

.inic_btn {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.crear_cuenta_btn {
  font-size: 18px;
}
</style>