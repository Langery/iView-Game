import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI)
Vue.use(Vuex)
Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   // console.log(to.meta.type)
//   // const type = to.meta.type
//   // console.log(type)
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
