import Vuex from 'vuex'
import Vue from 'vue';

import actions from './actions'
import mutations from './mutations';
import getters from "@/store/getters";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      gallery: null,
      user: null,
      usersGallery: []
    },
    mutations,
    actions,
    getters
  })
}

export default createStore;
