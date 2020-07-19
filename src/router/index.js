import Vue from "vue";
import VueRouter from "vue-router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import List from "../views/List.vue";

Vue.use(VueRouter);
Vue.use(Antd);

const routes = [
  {
    path: "/",
    name: "List",
    component: List
  },
  {
    path: "/create",
    name: "Create",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateCard.vue")
  }
];
const router = new VueRouter({
  routes
});

export default router;
