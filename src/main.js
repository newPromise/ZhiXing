// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/ajax.js';
import store from './store/';
import Mint from 'mint-ui';

// 静止资源
import './assets/CSS/style.css';
import '../node_modules/mint-ui/lib/style.css';

Vue.use(Mint);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
