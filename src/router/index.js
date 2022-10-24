import Vue from 'vue'
import VueRouter from 'vue-router'
import Home_View from '../views/Home_View.vue'
import Login_View from '../views/Login_View.vue'
import SignIn_View from '../views/SignIn_View.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home_View
  },
  {
    path: '/login',
    name: 'login',
    component: Login_View
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn_View
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
