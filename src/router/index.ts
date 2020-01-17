import Vue from 'vue'
import VueRouter from 'vue-router'
import Account from '@/views/Account.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/account',
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
  {
    path: '/labels',
    name: 'labels',
    component: Labels,
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics,
  },
  // {
  //   path: '/labels',
  //   name: 'labels',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
]

const router = new VueRouter({
  routes,
})

export default router
