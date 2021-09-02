import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
//Step 1 for VueRouter
import VueRouter from 'vue-router'
import Routes from './router/index'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

//Step1 for VueRouter continued
Vue.use(VueRouter)

////step 3 of router: added as part of routing
const router = new VueRouter({
  routes: Routes, // short for 'routes:routes'
  mode: 'history'
});

//Changed the below to make app router aware
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
