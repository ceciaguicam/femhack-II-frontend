import './assets/main.css'
import { initApexCharts } from "@/plugins/apexcharts";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

initApexCharts(app);
