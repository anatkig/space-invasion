import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AimView from "../views/AimView.vue";
import RulesView from "../views/RulesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: AboutView,
    },
    {
      path: "/game",
      name: "home",
      component: HomeView,
    },
    {
      path: "/aim",
      name: "aim",
      component: AimView,
    },
    {
      path: "/rules",
      name: "rules",
      component: RulesView,
    },
  ],
});

export default router;
