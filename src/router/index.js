import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Wishlists from '../components/global/Wishlists.vue'
import Error from '../components/global/Error.vue'
import Contact from '../components/global/Contact.vue'

import Shop from '../views/Shop.vue'

import ProductDetails from '../views/ProductDetails.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Checkout from '../views/Checkout.vue'

import AboutUs from '../views/AboutUs.vue'

import Team from '../views/Team.vue'
import Portfolio from '../views/Portfolio.vue'
import PortfolioDetails from '../views/PortfolioDetails.vue'

import Myaccount from '../views/Myaccount.vue'


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
    path: '*',
    name: 'Error',
    component: Error
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare
  },
   {
     path: '/account',
    name: 'Myaccount',
     component: Myaccount
   },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/portfolio/:id',
    name: 'PortfolioDetails',
    component: PortfolioDetails,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default router
