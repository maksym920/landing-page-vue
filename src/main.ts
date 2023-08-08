import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import NotFoundVue from "./components/NotFound/NotFound.vue";
import LandingPageVue from "./components/LandingPage/LandingPage.vue";
import { registerScrollSpy } from "vue3-scroll-spy";
import "./style.css";
const routes = [
  { path: "/", component: LandingPageVue },
  // Add the Not Found route as the last route
  { path: "/:pathMatch(.*)", component: NotFoundVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
registerScrollSpy(app);
app.use(router);
app.mount("#app");
