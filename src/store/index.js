import Vue from "vue";
import Vuex from "vuex";
import subStore1 from "./sub-store1";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    subStore1,
  },
  state: {},
  mutations: {},
  actions: {},
});
