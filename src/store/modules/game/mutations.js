import {
  SET_LEVEL,
  SET_SCORE,
  SET_LIVES,
  SET_PAUSED,
  SET_RUNNING,
  SET_LOADING
} from './mutationTypes'; //eslint-disable-line

export default {
  [SET_LEVEL](state, data) {
    state.level = data;
  },
  [SET_SCORE](state, data) {
    state.score = data;
  },
  [SET_LIVES](state, data) {
    state.lives = data;
  },
  [SET_RUNNING](state, data) {
    state.running = data;
  },
  [SET_PAUSED](state, data) {
    state.paused = data;
  },
  [SET_LOADING](state, data) {
    state.loading = data;
  }
};
