import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import MainPage from "./views/Main/MainPage.vue";
import MenuPage from "./views/Menu/MenuPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import ClientManagePage from "./views/ClientManage/ClientManagePage.vue";
import QuestionPage from "./views/Client/QuestionPage.vue";
import ClientPage from "./views/Client/ClientPage.vue";
import CalendarPage from "./views/Calendar/CalendarPage.vue";
import ReservationPage from "./views/Reservation/ReservationPage.vue";
import PlanPage from "./views/Plan/PlanPage.vue";
import PricingPage from "./views/Pricing/PricingPage.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/menu", component: MenuPage },
  { path: "/client", component: ClientManagePage },
  { path: `/client/:id`, component: ClientPage },
  { path: "/question", component: QuestionPage },
  { path: "/calendar", component: CalendarPage },
  { path: "/reservation", component: ReservationPage },
  { path: "/plan", component: PlanPage },
  { path: "/price", component: PricingPage },
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
