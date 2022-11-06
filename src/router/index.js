import Vue from 'vue'
import VueRouter from 'vue-router'
// Layouts
import MainLayout from '/src/layouts/MainLayout.vue';
import SpecialistLayout from '/src/layouts/SpecialistLayout.vue';
// Views
import HomeView from '/src/views/HomeView.vue'
import LoginView from '/src/views/LoginView.vue'
import SignInView from '/src/views/SignInView.vue'
import PatientListView from '/src/views/PatientListView.vue'

import { ROUTES } from './names'

import goTo from 'vuetify/lib/services/goto'

Vue.use(VueRouter)

const routes = [
  /**
   * Home Pages
   */
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: ROUTES.HOME,
        component: HomeView
      },
    ]
  },
  /**
   * Specialist Pages
   */
  {
    path: '/specialist',
    component: SpecialistLayout,
    children: [
      {
        path: '',
        name: ROUTES.SPECIALIST__PATIENT_LIST,
        component: PatientListView
      }
    ]
  },
  /**
   * Authentication Pages
   */
  {
    path: '/login',
    name: ROUTES.LOGIN,
    component: LoginView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
]

const router = new VueRouter({
  /**
   * Programmatic scrolling
   */
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
