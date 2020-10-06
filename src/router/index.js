import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wishlists from '../views/Wishlists.vue'
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
import AccountManage from '../views/AccountManage.vue'
import Complete from '../views/Complete.vue'

import Myaccount from '../views/Myaccount.vue'
import Compare from '../views/Compare.vue'
import firebase from 'firebase'


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
    component: Wishlists,
    meta: { requiresAuth: true }
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
    path: '/shop/:category',
    name: 'ShopByCategory',
    component: Shop,
    props: true
  },
  {
    path: '/shop/:mainCategory',
    name: 'ShopByMainCategory',
    component: Shop,
    props: true
  },
  {
    path: '/shop/:gender',
    name: 'ShopByGender',
    component: Shop,
    props: true
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
    path: '/myaccount',
    name: 'AccountManage',
    component: AccountManage,
    meta: { requiresAuth: true }
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
  {
    path: '/complete',
    name: 'Complete',
    component: Complete,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

// Nav Guards
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guards
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if "not" logged in
    if(!firebase.auth().currentUser){
      //Go to login
      next({
        path: '/account',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      //Proceed to route
      next();
    }
  } 
  else {
    //Proceed to route
    next();
  }
})

export default router
