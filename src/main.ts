import './lib/isq.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/css/border.css'

import router from './router/index.ts'

const app = createApp(App);
app.use(router);
app.mount('#app');
