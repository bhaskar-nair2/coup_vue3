import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/style.scss";

import "@/assets/css/tailwind.css";

import "./plugins/firebaseConfig.js";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
