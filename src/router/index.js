import { createRouter, createWebHistory } from 'vue-router'
// modifico la rotta
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Lab from '../pages/Lab.vue';
import Tech from '../pages/Tech.vue';
import Types from '../pages/Types.vue';

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
      path: '/abous us',
      name: 'about',
      component: About
    },

    {
      path: '/projects',
      name: 'lab',
      component: Lab
    },

    {
      path: '/technologies',
      name: 'tech',
      component: Tech
    },

    {
      path: '/types',
      name: 'type',
      component: Types
    }



  ]
})

export default router
