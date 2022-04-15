import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import naive from "naive-ui";
const app = createApp(App);
app.use(naive);
app.mount('#app')