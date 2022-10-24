/* eslint-disable */
<template>
  <v-app id="inspire">
    <v-app-bar app class="white"  flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="pink darken-4">
        <v-tab  class="black--text" v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>

       <v-btn
      @click="go_login"
      class="mx-2"
      fab
      dark
      color="purple"
      
    >
      <v-icon dark size="35px">
        mdi-login
      </v-icon>
    </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <!-- Header Container -->
      <v-container fluid class="header">
        <div class="overlay">
          <h1 class="subtitle">TECNOLOGÍA PARA LA DETECCIÓN DE EMOCIONES</h1>
          <h1 class="main_title">TRUE VISION</h1>
        </div>

        <div class="shape">
          <svg viewBox="0 0 1500 200">
            <path
              d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z"
            />
          </svg>
        </div>
        <div class="mouse-icon">
          <div class="wheel"></div>
        </div>
      </v-container>

      <!-- Service Section-->
      <section id="service" class="section pt-0">
        <v-container fill-width fluid>
          <h6 class="section-title text-center">Nuestros Servicios</h6>
          <h6 class="section-subtitle text-center mb-5 pb-3">
            Tecnologías y tratamientos disponibles.
          </h6>

          <br />

          <v-container fill-width fluid 
            class="justify-center container-cards"
          >
            <v-row justify="center">
              <div class="justify-center div_card">
                <v-card class="mx-auto service-card" max-width="380">
                  <v-img src="../assets/images/card1.png" height="200px"></v-img>

                  <v-card-title>
                    Detección de emociones en el rostro</v-card-title
                  >

                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>

                      <div class="grey--text ms-4">4.5 (413)</div>
                    </v-row>

                    <br />

                    <div>
                      Small plates, salads & sandwiches - an intimate setting
                      with 12 indoor seats plus patio seating.
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn text color="teal accent-4" @click="reveal1 = true">
                      Leer Más
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <v-card
                      v-if="reveal1"
                      class="transition-fast-in-fast-out v-card--reveal"
                      style="height: 100%"
                    >
                      <v-card-text class="pb-0">
                        <p class="text-h4 text--primary">Origin</p>
                        <p>
                          late 16th century (as a noun denoting a place where
                          alms were distributed): from medieval Latin
                          eleemosynarius, from late Latin eleemosyna ‘alms’,
                          from Greek eleēmosunē ‘compassion’
                        </p>
                      </v-card-text>
                      <v-card-actions class="pt-0">
                        <v-btn
                          text
                          color="teal accent-4"
                          @click="reveal1 = false"
                        >
                          Cerrar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </div>

              <div class="div_card">
                <v-card class="mx-auto service-card" max-width="380">
                  <v-img src="../assets/images/card2.png" height="200px"></v-img>

                  <v-card-title> Detección de emociones en la voz</v-card-title>

                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-rating
                        :value="4.0"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>

                      <div class="grey--text ms-4">4.0 (230)</div>
                    </v-row>

                    <br />

                    <div>
                      Small plates, salads & sandwiches - an intimate setting
                      with 12 indoor seats plus patio seating.
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn text color="teal accent-4" @click="reveal2 = true">
                      Leer Más
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <v-card
                      v-if="reveal2"
                      class="transition-fast-in-fast-out v-card--reveal"
                      style="height: 100%"
                    >
                      <v-card-text class="pb-0">
                        <p class="text-h4 text--primary">Origin</p>
                        <p>
                          late 16th century (as a noun denoting a place where
                          alms were distributed): from medieval Latin
                          eleemosynarius, from late Latin eleemosyna ‘alms’,
                          from Greek eleēmosunē ‘compassion’
                        </p>
                      </v-card-text>
                      <v-card-actions class="pt-0">
                        <v-btn
                          text
                          color="teal accent-4"
                          @click="reveal2 = false"
                        >
                          Cerrar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </div>

              <div class="div_card">
                <v-card class="mx-auto service-card" max-width="380">
                  <v-img src="../assets/images/card3.png" height="200px"></v-img>

                  <v-card-title> Consultas y consejería</v-card-title>

                  <v-card-text>
                    <v-row align="center" class="mx-0">
                      <v-rating
                        :value="4.8"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>

                      <div class="grey--text ms-4">4.8 (550)</div>
                    </v-row>

                    <br />

                    <div>
                      Small plates, salads & sandwiches - an intimate setting
                      with 12 indoor seats plus patio seating.
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn text color="teal accent-4" @click="reveal3 = true">
                      Leer Más
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <v-card
                      v-if="reveal3"
                      class="transition-fast-in-fast-out v-card--reveal"
                      style="height: 100%"
                    >
                      <v-card-text class="pb-0">
                        <p class="text-h4 text--primary">Origin</p>
                        <p>
                          late 16th century (as a noun denoting a place where
                          alms were distributed): from medieval Latin
                          eleemosynarius, from late Latin eleemosyna ‘alms’,
                          from Greek eleēmosunē ‘compassion’
                        </p>
                      </v-card-text>
                      <v-card-actions class="pt-0">
                        <v-btn
                          text
                          color="teal accent-4"
                          @click="reveal3 = false"
                        >
                          Cerrar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </div>
            </v-row>
          </v-container>
        </v-container>
      </section>

      <!-- About Section -->
      <section class="section" id="about">
        <v-container class="grey lighten-2  container-about">
          <v-row class="row-about">
            <v-col cols="6" md="5" pr="5" mb="4" class="col-about">
              <h6 class="section-title mb-0">Sobre el Centro</h6>
              <h6 class="section-subtitle mb-4">
                Centro de Ayuda Psicológica para el Control de Emociones
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate molestiae temporibus et tenetur unde quasi, cum nemo
                quo, molestias architecto alias voluptatibus corrupti corporis
                earum. Necessitatibus maxime modi ipsam, quod!
              </p>
              <img
                src="../assets/images/about1.png"
                alt=""
                class="w-100 mt-3 shadow-sm"
              />
            </v-col>

            <v-col cols="6" md="5" pr="5" mb="4" class="col-about">
              <v-row>
                        <v-col cols="6">
                            <img src="../assets/images/about2.png" alt="" class="w-100 shadow-sm">
                        </v-col>
                        <v-col cols="6">
                            <img src="../assets/images/about3.png" alt="" class="w-100 shadow-sm">
                        </v-col>
                        <v-col cols="12" mt="4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo iusto quidem laborum atque, sapiente ipsa excepturi fuga cum sed in assumenda eos quasi harum culpa laboriosam nulla, incidunt quae. Voluptatum.</p>
                            <p><b>Aliquid fuga sunt velit, temporibus molestias ab. Ipsa nesciunt totam, aliquid dignissimos.</b><br>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ut a dolorem, consectetur, eos suscipit consequatur magnam est dolore obcaecati adipisci expedita, vero, iste ducimus qui numquam animi facilis officia?</p>
                        </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </section>



    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Servicios", "Información", "Contacto"],
    show: false,

    //To Show More of the Card
    reveal1: false,
    reveal2: false,
    reveal3: false,


  }),

  methods: {
    go_login() {
      this.$router.push({path: '/login'});
    }
  }

};
</script>

<style src="../assets/css/home_page.css" scoped>
</style>