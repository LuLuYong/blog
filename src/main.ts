import Vue from 'vue';
import { FastClick } from 'fastclick';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import './registerServiceWorker';

FastClick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
