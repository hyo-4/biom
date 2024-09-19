import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/Main/MainPage.vue";
import MenuPage from "@/views/Menu/MenuPage.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/menu", component: MenuPage },
];

const biomrouter = createRouter({
  history: createWebHistory(),
  routes,
});

export default biomrouter;
