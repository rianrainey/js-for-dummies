import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/sheep',
      name: 'sheep',
      component: () => import('../views/SheepView.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TemplateView.vue'),
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue'),
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('../views/FormsView.vue'),
    },
  ],
})

export default router