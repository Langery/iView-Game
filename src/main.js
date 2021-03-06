import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(Vuex)
Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   // console.log(to.meta.type)
//   // const type = to.meta.type
//   // console.log(type)
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app');
