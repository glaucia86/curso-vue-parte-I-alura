import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: 'history' // mode 'history' justo para tratar a roda e não precisar incluir #
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
