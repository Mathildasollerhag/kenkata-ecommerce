import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Wishlists from '../components/global/Wishlists.vue'

import Shop from '../views/Shop.vue'

import Compare from '../views/Compare.vue'

import ProductDetails from '../views/ProductDetails.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Checkout from '../views/Checkout.vue'
import AboutUs from '../views/AboutUs.vue'
import Portfolio from '../views/Portfolio.vue'


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

  // {
  //   path: '/account',
  //   name: 'MyAccount',
  //   component: MyAccount
  // },
  // {
  //   path: '/wishlist',
  //   name: 'Wishlist',
  //   component: Wishlist
  // },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare
  },
  // {
  //   path: '/404???',
  //   name: '404',
  //   component: 404
  // },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  // {
  //   path: '/team',
  //   name: 'Team',
  //   component: Team
  // },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  // {
  //   path: '/portfolio-details???',
  //   name: 'PortfolioDetails',
  //   component: PortfolioDetails
  // },
  // {
  //   path: '/contact',
  //   name: 'ContactUs',
  //   component: ContactUs
  // }

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
