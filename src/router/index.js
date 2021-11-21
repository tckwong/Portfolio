import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Thankyou from '../views/Thankyou.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: 'Thankyou',
    name: 'Thankyou',
    component: Thankyou
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
