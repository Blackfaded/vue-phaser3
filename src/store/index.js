import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import game from './modules/game';
import controls from './modules/controls';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    game,
    controls
  }
  /*
  plugins: [
    createPersistedState({
      paths: ['game']
    })
  ]
  */
});

export default store;
