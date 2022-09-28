import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ApplyNow from "../views/ApplyNow.vue"
import SolutionTemplate from "../views/SolutionTemplate.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/applynow",
    name: "applynow",
    component: ApplyNow,
  },
   {
    path: "/merchant-cash-advance",
    name: "merchant-cash-advance",
    component: SolutionTemplate,
  },
  {
    path: "/line-of-credit",
    name: "line-of-credit",
    component: SolutionTemplate,
  },
  {
    path: "/equipment-financing",
    name: "equipment-financing",
    component: SolutionTemplate,
  },
  {
    path: "/mortgage-financing",
    name: "mortgage-financing",
    component: SolutionTemplate,
  },
  {
    path: "/term-loan",
    name: "term-loan",
    component: SolutionTemplate,
  },
  {
    path: "/factoring",
    name: "factoring",
    component: SolutionTemplate,
  },
  {
    path: "/po-financing",
    name: "po-financing",
    component: SolutionTemplate,
  },
  {
    path: "/credt-servicing",
    name: "credt-servicing",
    component: SolutionTemplate,
  },
  {
    path: "/credt-card-processing",
    name: "credt-card-processing",
    component: SolutionTemplate,
  },
  {
    path: "/hr-payroll",
    name: "hr-payroll",
    component: SolutionTemplate,
  },
  {
    path: "/seo",
    name: "seo",
    component: SolutionTemplate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
