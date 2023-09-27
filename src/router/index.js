import { createRouter, createWebHistory } from 'vue-router'
import Countries from '../views/Countries.vue'
import Quiz from '../views/Quiz.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/countries',
    name: 'countries',
    component: Countries
  },
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/quiz',
    name: 'quiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Quiz
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
