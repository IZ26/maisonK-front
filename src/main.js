// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal'
import {store} from './store'
import vue2Swiper from 'vue2-swiper'

Vue.prototype.$http = axios
Vue.use(vue2Swiper)
Vue.use(VueScrollReveal)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
