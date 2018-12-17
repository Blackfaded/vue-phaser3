import {
  SET_LEVEL,
  ADD_LEVEL,
  SET_SCORE,
  ADD_TO_SCORE,
  SET_LIVES,
  SET_PAUSED,
  SET_RUNNING,
  SET_LOADING
} from './mutationTypes'; //eslint-disable-line

export default {
  setLevel(context, data) {
    context.commit(SET_LEVEL, data);
  },
  addLevel(context) {
    context.commit(ADD_LEVEL);
  },
  setScore(context, data) {
    context.commit(SET_SCORE, data);
  },
  addToScore(context, data) {
    context.commit(ADD_TO_SCORE, data);
  },
  setLives(context, data) {
    context.commit(SET_LIVES, data);
  },
  setRunning(context, data) {
    context.commit(SET_RUNNING, data);
  },
  setPaused(context, data) {
    context.commit(SET_PAUSED, data);
  },
  setLoading(context, data) {
    context.commit(SET_LOADING, data);
  }
};
