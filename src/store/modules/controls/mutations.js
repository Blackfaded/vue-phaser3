import { SET_RIGHT_PRESSED, SET_LEFT_PRESSED } from './mutationTypes';

export default {
  [SET_LEFT_PRESSED](state, data) {
    state.leftPressed = data;
  },
  [SET_RIGHT_PRESSED](state, data) {
    state.rightPressed = data;
  }
};
