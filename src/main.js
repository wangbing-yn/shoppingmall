// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.min.css'


import Vuex from 'vuex'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import App from './App'
import './assets/css/bootstrap.min.css'  
import './assets/js/bootstrap.min' 
import router from './router'

// import VueSweetalert2 from './plugins/vue-sweetalert2'


// Vue.use(VueSweetalert2)

Vue.use(VueAwesomeSwiper)

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.use(Vuex)


router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === "/login") {
      next()
  } else {
      next({
          path: "/login"
      })
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
