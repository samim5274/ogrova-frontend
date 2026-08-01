import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'


import './style.css';

// Icons
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import "leaflet/dist/leaflet.css"; // it's use only for map

// -----------------------------
// Theme Initialization
// -----------------------------
const savedTheme = localStorage.getItem("theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDark = savedTheme ? savedTheme === "dark" : systemDark;

document.documentElement.classList.toggle("dark", isDark);

// -----------------------------
// Vue App
// -----------------------------
const app = createApp(App)

app.use(router)
app.use(createPinia());
app.use(createHead());

app.mount('#app')