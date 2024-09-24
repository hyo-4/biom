import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/Main/MainPage.vue";
import MenuPage from "@/views/Menu/MenuPage.vue";
import MenuPage2 from "@/views/Menu/MenuPage2.vue";
import QuestionPage from "@/views/Client/QuestionPage.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/menu", component: MenuPage },
  { path: "/menu2", component: MenuPage2 },
  { path: "/question", component: QuestionPage },
];

const biomrouter = createRouter({
  history: createWebHistory(),
  routes,
});

export default biomrouter;
