import Vue from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/components/HelloWorld.vue'

const routes = [
  {
    path: '/resume',
    name: 'Home',
    component: Home
  }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  

export default router
