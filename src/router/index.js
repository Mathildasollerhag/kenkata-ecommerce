import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wishlists from '../components/global/Wishlists.vue'
import Error from '../components/global/Error.vue'
import Contact from '../components/global/Contact.vue'
//Import .vue - file here

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wishlist',
    name: 'Wishlists',
    component: Wishlists
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
