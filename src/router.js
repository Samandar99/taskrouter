import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from "vue-router";

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Cars from '@/pages/Cars.vue'

const routers = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    },
  ]
})

export default routers