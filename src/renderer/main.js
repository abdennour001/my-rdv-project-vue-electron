import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'

import App from './App'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD hh:mm')
  }
})

window.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3333'

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
