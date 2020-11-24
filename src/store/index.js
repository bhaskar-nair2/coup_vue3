import { createStore } from "vuex";

import { self } from "./self";
import { table } from "./table";
import { players } from "./players";
import { turn } from "./turn";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    self,
    table,
    players,
    turn
  }
});
