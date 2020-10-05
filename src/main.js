import 'bootstrap-css-only/css/bootstrap.min.css'
import 'vue-range-slider/dist/vue-range-slider.css'
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueTippy from 'vue-tippy';

Vue.use(VueTippy);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


