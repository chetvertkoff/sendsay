import Vue from 'vue'
import store from './Store'
import App from './App.vue'
import { router } from './routes';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')