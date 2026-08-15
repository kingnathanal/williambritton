import { createRouter, createWebHistory } from 'vue-router'
import QuietSystemsView from '../views/QuietSystemsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: QuietSystemsView
    },
    {
      path: '/quiet-systems',
      redirect: '/'
    }
  ]
})

export default router
