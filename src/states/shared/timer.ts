const CreateTimeState = () => {
  let _time = 0;

  return {
    get time() {
      return _time;
    },

    set time(time: number) {
      _time = time;
    }
  }
};

export type TimeState = ReturnType<typeof CreateTimeState>;
export default CreateTimeState;
