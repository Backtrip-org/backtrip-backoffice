import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
// Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#app');
