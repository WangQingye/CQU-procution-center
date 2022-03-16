import Vue from 'vue';
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: 'production-services',
}, {
  path: '/home',
  component: Index,
  children: [{
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "home" */ '@/views/home/index.vue')
  }, {
    path: '/news',
    name: 'news',
    component: () => import( /* webpackChunkName: "news" */ '@/views/news/index.vue')
  }, {
    path: '/models',
    name: 'models',
    component: () => import( /* webpackChunkName: "models" */ '@/views/models/index.vue')
  }, {
    path: '/production-services',
    name: 'production-services',
    component: () => import( /* webpackChunkName: "prodution-services" */ '@/views/prodution-services/index.vue')
  }]
}]

const router = new VueRouter({
  routes
})

export default router