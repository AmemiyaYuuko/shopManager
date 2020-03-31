/* jshint esversion: 6 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/assets/css/global.css'
import axios from 'axios'
import {
  Message
} from 'element-ui'

Vue.config.productionTip = false

axios.defaults.baseURL = '/api/private/v1/'
Vue.prototype.$http = axios
Vue.prototype.$msg = Message

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
