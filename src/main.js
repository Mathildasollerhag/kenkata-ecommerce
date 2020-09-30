import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "axios";
import firebase from "firebase/app";

import VueTippy from 'vue-tippy';

Vue.prototype.$axios = axios;
Vue.use(VueTippy);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


const firebaseConfig = {
  apiKey: "AIzaSyD34LvNJtVzzq5kA-4_0qhkKd2KIRT6i5I",
  authDomain: "kenkata-api.firebaseapp.com",
  databaseURL: "https://kenkata-api.firebaseio.com",
  projectId: "kenkata-api",
  storageBucket: "kenkata-api.appspot.com",
  messagingSenderId: "741124960770",
  appId: "1:741124960770:web:9c895165fbea7459f5ad1b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


