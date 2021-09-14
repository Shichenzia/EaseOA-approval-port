import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import element from 'element-ui'
import '../mockjs/index'
import 'element-ui/lib/theme-chalk/index.css'




Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.use(element);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
