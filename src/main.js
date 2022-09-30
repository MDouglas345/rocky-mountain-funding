import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/scss/main.css";


const app = createApp(App).use(router);
app.config.globalProperties.$hostname = "Rocky Mountain Funding Group";
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js";
