import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routers from './router/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)

const RouterConfig = {
  routes: Routers
};
const router = new VueRouter(RouterConfig)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
}).$mount('#app')
