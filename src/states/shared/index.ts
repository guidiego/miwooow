import CreatePlayerState from "./player";
import CreateTimeState from "./timer";


const CreateSharedState = () => {
  const playerState = CreatePlayerState();
  const timeState = CreateTimeState();

  return {
    getPlaceName() {
      return 'City Name';
    },
    ...playerState,
    ...timeState,
  }
};

export type SharedState = ReturnType<typeof CreateSharedState>;
export default CreateSharedState;
