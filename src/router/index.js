import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: Home
  },
  {
    path: "/create",
    name: "Create",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddCard.vue")
  }
];
const router = new VueRouter({
  routes
});

export default router;
