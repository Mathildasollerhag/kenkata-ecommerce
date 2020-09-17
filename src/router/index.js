import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Shop from '../views/Shop.vue'


import ProductDetails from '../views/ProductDetails.vue'
import Quickview from '@/components/quickview/Quickview'
import ShoppingCart from '../views/ShoppingCart.vue'
import Checkout from '../views/Checkout.vue'

import AboutUs from '../views/AboutUs.vue'


//Import .vue - file here

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: 'quickview/:id',
    name: 'Quickview',
    component: Quickview,
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
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
