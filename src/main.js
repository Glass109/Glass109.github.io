import { createApp } from 'vue'
import './assets/main.css'
import App from './routes/WindowsPortfolio.vue'
import {createRouter, createWebHistory} from "vue-router";
import WindowsDesign from "./routes/WindowsPortfolio.vue";
import StreetLights from "./routes/StreetLights.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WindowsDesign },
        { path: '/sl', component: StreetLights },
    ]
})
createApp(App)
    .use(router)
    .mount('#app')
