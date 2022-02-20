const MeasurableLevels = ['hungry', 'thirst', 'tiredness'];

const SharedStateMachine = () => {
  const state = {
    life: 7,
    hungry: 100,
    thirst: 100,
    tiredness: 100,
    timer: 0,
  }

  return {
    getTimer() {
      return state.timer;
    },

    getLife() {
      return state.life
    },

    decreaseLife() {
      state.life--;
    },

    levels: MeasurableLevels.reduce((a, c) => ({
      ...a, [c]: {
        get: () => state[c],
        increaseIn: (x: number) => state[c] += x,
      }
    }), {}),

    getQuantityOfLevelsIn0() {
      return MeasurableLevels.filter((key) => {
        return state[key] <= 0;
      }).length;
    },

    setTimer(time) {
      state.timer = time;
    }
  }
};

export default SharedStateMachine;
