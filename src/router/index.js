import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: () => import('@/pages/Intro.vue'),
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('@/pages/Result.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;