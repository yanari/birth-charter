import { createApp } from 'vue'
import App from '@/App.vue';
import router from '@/router';

import VueSocialSharing from 'vue-social-sharing'

import '@/assets/main.css'

const app = createApp(App)

app.use(VueSocialSharing)
app.use(router)

app.mount('#app')
