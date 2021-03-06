import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBXFAxSgXP7b5D25WEtjxkYqoWM2PjxaLg'
}})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
