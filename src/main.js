import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vGallery from 'v-gallery'
Vue.use(vGallery)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
