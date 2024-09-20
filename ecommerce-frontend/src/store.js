// store.js or store/index.js

import { createStore } from 'vuex';
import router from './router';

export default createStore({
  state: {
    isLoggedIn: !!localStorage.getItem('token'),
    basket: []
  },
  mutations: {
    LOGIN(state) {
      state.isLoggedIn = true;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
    },
    ADD_TO_BASKET(state, product) {
      state.basket.push(product);
    },
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem('token', token);
      commit('LOGIN');
    },
    logout({ commit, dispatch }) {
      localStorage.removeItem('token');
      commit('LOGOUT');
      dispatch('navigateToLogin');
    },
    navigateToLogin() {
      router.push({ name: 'Login' });
    },
    addToBasket({ commit }, product) {
      commit('ADD_TO_BASKET', product);
    },
    removeFromBasket({ commit }, index) {
      commit('REMOVE_FROM_BASKET', index);
    }
  },
  getters: {
    basketItems: state => state.basket
  }
})