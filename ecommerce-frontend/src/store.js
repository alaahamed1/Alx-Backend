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
    REMOVE_FROM_BASKET(state, productId) {
      state.basket = state.basket.filter(item => item.id !== productId);
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
    removeFromBasket({ commit }, productId) {
      commit('REMOVE_FROM_BASKET', productId);
    }
  },
  getters: {
    basketItems: state => state.basket,
    basketItemCount: state => state.basket.length
  }
});