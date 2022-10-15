import Vue from 'vue';
import Vuex from 'vuex';
import offer from './modules/offer';

Vue.use(Vuex);

const Store = new Vuex.Store({
  modules: {
    offer,
  },
});

export default Store;
