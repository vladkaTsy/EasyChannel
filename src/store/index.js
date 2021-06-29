import Vue from 'vue';
import Vuex from 'vuex';

import { apiOrders } from '@/api/orders';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: {},
    totalOrders: 0,
  },
  mutations: {
    setOrders(state, value = {}) {
      state.orders = value.items;
      state.totalOrders = value.total_count;
    },
  },
  actions: {
    async fetchOrders({ commit }, data) {
      try {
        const orders = await apiOrders(data);
        console.log(orders.data);
        commit('setOrders', orders.data);
      } catch (err) {
        console.error(err);
      }
    },
  },
  modules: {
  },
});
