import Vue from 'vue'
import VueRouter from 'vue-router'
// Layouts
import MainLayout from '/src/layouts/MainLayout.vue';
// Views
import HomeView from '/src/views/HomeView.vue'
import LoginView from '/src/views/LoginView.vue'
import SignInView from '/src/views/SignInView.vue'
import PatientListView from '/src/views/PatientListView.vue'

import { ROUTES } from './names'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: ROUTES.HOME,
        component: HomeView
      },
      {
        path: '/list',
        name: ROUTES.PATIENT_LIST,
        component: PatientListView
      }
    ]
  },
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
