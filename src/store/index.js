import Vue from "vue";
import Vuex from "vuex";
import products from './modules/products';
import users from './modules/users';
import shoppingcart from './modules/shoppingcart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    shoppingcart,
    users,
  }
});
