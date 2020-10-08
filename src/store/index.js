import Vue from "vue";
import Vuex from "vuex";
import products from './modules/products';
import users from './modules/users';
import shoppingcart from './modules/shoppingcart';
import portfolio from './modules/portfolio';
import orders from './modules/orders';
import compare from './modules/compare';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    shoppingcart,
    users,
    portfolio,
    orders,
    compare,

  }
});
