import { SET_RIGHT_PRESSED, SET_LEFT_PRESSED } from './mutationTypes';

export default {
  setLeftPressed(context, data) {
    context.commit(SET_LEFT_PRESSED, data);
  },
  setRightPressed(context, data) {
    context.commit(SET_RIGHT_PRESSED, data);
  }
};
