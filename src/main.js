import { createApp } from 'vue';
import './assets/main.css';
import App from './app.vue';
import { createRouter, createWebHistory } from 'vue-router';
import WindowsDesign from './routes/WindowsPortfolio.vue';
import HotlinePortfolio from './routes/HotlinePortfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WindowsDesign },
        { path: '/threedee', component: HotlinePortfolio }
    ]
});

createApp(App)
    .use(router)
    .mount('#app');
