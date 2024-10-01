import { createRouter, createWebHistory } from 'vue-router'
// modifico la rotta
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Lab from '../pages/Lab.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/',
      name: 'home2',
      component: Home
    },


    {
      path: '/chi siamo',
      name: 'about',
      component: About
    },

    {
      path: '/progetti',
      name: 'lab',
      component: Lab
    },


  ]
})

export default router
