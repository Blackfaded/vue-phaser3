import {
  SET_LEVEL,
  SET_SCORE,
  SET_LIVES,
  SET_PAUSED,
  SET_RUNNING,
  SET_LOADING
} from './mutationTypes'; //eslint-disable-line

export default {
  setLevel(context, data) {
    context.commit(SET_LEVEL, data);
  },
  setScore(context, data) {
    context.commit(SET_SCORE, data);
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
