import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import MainPage from "./views/Main/MainPage.vue";
import MenuPage from "./views/Menu/MenuPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import ClientManagePage from "./views/ClientManage/ClientManagePage.vue";
import MenuPage2 from "./views/Menu/MenuPage2.vue";
import QuestionPage from "./views/QuestionPage.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/menu", component: MenuPage },
  { path: "/client", component: ClientManagePage },
  { path: "/menu2", component: MenuPage2 },
  { path: "/question", component: QuestionPage },
];

const biomrouter = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(biomrouter as any); // Make sure this is the router instance
app.use(pinia);

app.mount("#app");
