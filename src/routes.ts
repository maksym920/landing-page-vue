import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotFound from "./components/NotFound/NotFound.vue";
import LandingPage from "./components/LandingPage/LandingPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: LandingPage,
    name: "LandingPage",
    meta: { title: "Login" },
  },
  { path: "/:path(.*)", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
