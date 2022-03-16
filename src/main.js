import Vue from 'vue';
import ElementUI from 'element-ui';
import '@/assets/scss/element-variables.scss'
import '@/assets/scss/reset.scss'
import App from './App.vue';
import router from './router/index';

Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});