import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Checkout from '../views/Checkout.vue'
//Import .vue - file here

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product:id',
    name: 'ProductDetails',
    component: ProductDetails
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
  //   path: '/wishlist',
  //   name: 'Wishlist',
  //   component: Wishlist
  // },
  // {
  //   path: '/compare',
  //   name: 'Compare',
  //   component: Compare
  // },
  // {
  //   path: '/404???',
  //   name: '404',
  //   component: 404
  // },
  // {
  //   path: '/about',
  //   name: 'AboutUs',
  //   component: AboutUs
  // },
  // {
  //   path: '/team',
  //   name: 'Team',
  //   component: Team
  // },
  // {
  //   path: '/portfolio',
  //   name: 'Portfolio',
  //   component: Portfolio
  // },
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
  routes
})

export default router
