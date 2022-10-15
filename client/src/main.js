import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/store';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = process.env.NODE_ENV === 'development';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
