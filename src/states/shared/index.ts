import CreatePlayerState from "./player";
import CreateTimeState from "./timer";


const CreateSharedState = () => {
  const playerState = CreatePlayerState();
  const timeState = CreateTimeState();

  return {
    ...playerState,
    ...timeState,
  }
};

export type SharedState = ReturnType<typeof CreateSharedState>;
export default CreateSharedState;
