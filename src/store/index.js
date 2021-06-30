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
      return new Promise((resolve, reject) => {
        apiOrders(data)
          .then((orders) => {
            console.log(orders.data);
            commit('setOrders', orders.data);
            resolve(orders.data.items);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
  },
  getters: {
    totalOrders: (state) => state.totalOrders,
  },
  modules: {},
});
