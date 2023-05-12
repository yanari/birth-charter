import { createApp } from 'vue'
import App from '@/App.vue';
import router from '@/router';

import VueSocialSharing from 'vue-social-sharing';
import { createHead, VueHeadMixin } from '@unhead/vue';

import '@/assets/main.css'

const app = createApp(App)

app.mixin(VueHeadMixin);
app.use(VueSocialSharing)
app.use(router)
app.use(createHead())

app.mount('#app')
