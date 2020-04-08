import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
