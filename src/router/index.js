import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import InfoView from "../views/InfoView.vue";
import HallOfRecords from "../views/HallOfRecords.vue";
import { aim, rules } from "../data/info.js";

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
      component: InfoView,
      props: { pageContent: aim },
    },
    {
      path: "/rules",
      name: "rules",
      component: InfoView,
      props: { pageContent: rules },
    },
    {
      path: "/hall",
      name: "hallOfRecords",
      component: HallOfRecords,
    },
  ],
});

export default router;
