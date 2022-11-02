//import Vue from 'vue'
import './assets/css/app.scss'
import App from './App.vue'
import Hello from "./components/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import {createApp} from "vue";

// 1. Define route components.
// These can be imported from other files
const Home = { template: Hello  }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/home', component: Hello },
  { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(), 
  routes:routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App).use(router).mount('#app')
