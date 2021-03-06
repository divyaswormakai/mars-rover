import { ROVER_DIRECTION, ROVER_MOVEMENT } from '../../common/constants';
import { isCorrectMovement } from '../../common/helpers';

// Return the state of the move based on the correctness of the movement
const getStateCheckingMovement = ({
  grid,
  newDirection,
  newPosition,
  state,
}) => {
  if (isCorrectMovement({ grid, newPosition })) {
    return {
      current: newPosition,
      direction: newDirection,
      log: [state.current, ...state.log],
    };
  }
  return { ...state, log: ['Outside boundary', ...state.log] };
};

// Return the new rover state based on the keyboard input or
export const getNewRoverState = ({
  current,
  direction,
  grid,
  roverMovement,
  state,
}) => {
  const newPosition = { ...current };
  let newDirection = null;
  switch (roverMovement) {
    case ROVER_MOVEMENT.F: {
      switch (direction) {
        case ROVER_DIRECTION.N: {
          newPosition.y = newPosition.y + 1;
          newDirection = ROVER_DIRECTION.N;
          break;
        }
        case ROVER_DIRECTION.S: {
          newPosition.y = newPosition.y - 1;
          newDirection = ROVER_DIRECTION.S;
          break;
        }
        case ROVER_DIRECTION.W: {
          newPosition.x = newPosition.x - 1;
          newDirection = ROVER_DIRECTION.W;
          break;
        }
        case ROVER_DIRECTION.E: {
          newPosition.x = newPosition.x + 1;
          newDirection = ROVER_DIRECTION.E;
          break;
        }
        default:
          return state;
      }
      break;
    }
    case ROVER_MOVEMENT.L: {
      switch (direction) {
        case ROVER_DIRECTION.N: {
          newDirection = ROVER_DIRECTION.W;
          break;
        }
        case ROVER_DIRECTION.S: {
          newDirection = ROVER_DIRECTION.E;
          break;
        }
        case ROVER_DIRECTION.W: {
          newDirection = ROVER_DIRECTION.S;
          break;
        }
        case ROVER_DIRECTION.E: {
          newDirection = ROVER_DIRECTION.N;
          break;
        }
        default:
          return state;
      }
      break;
    }
    case ROVER_MOVEMENT.R: {
      switch (direction) {
        case ROVER_DIRECTION.N: {
          newDirection = ROVER_DIRECTION.E;
          break;
        }
        case ROVER_DIRECTION.S: {
          newDirection = ROVER_DIRECTION.W;
          break;
        }
        case ROVER_DIRECTION.W: {
          newDirection = ROVER_DIRECTION.N;
          break;
        }
        case ROVER_DIRECTION.E: {
          newDirection = ROVER_DIRECTION.S;
          break;
        }
        default:
          return state;
      }
      break;
    }
    default:
      return state;
  }
  return getStateCheckingMovement({
    grid,
    newDirection,
    newPosition,
    state,
  });
};
