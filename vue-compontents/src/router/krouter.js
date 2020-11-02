/*
 * @Author: your name
 * @Date: 2020-10-29 17:15:22
 * @LastEditTime: 2020-10-30 09:21:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-compontents\src\router\krouter.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
];

const router = new VueRouter({
  routes
});

export default router;
