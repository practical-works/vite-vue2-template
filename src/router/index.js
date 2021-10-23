import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

export default new VueRouter({
  routes,
  mode: "history",
  base: import.meta.env.BASE_URL,
  linkExactActiveClass: "is-active",
  scrollBehavior(/* to, from, savedPosition */) {
    return { x: 0, y: 0 };
  },
});
