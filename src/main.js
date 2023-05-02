import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';

import Intro from './pages/Intro.vue';
import Result from './pages/Result.vue';

import './assets/main.css'

const routes = [
  { path: '/', component: Intro },
  { path: '/result', name: 'Result', component: Result, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App)

app.use(router)

app.mount('#app')
