import { ROVER_DIRECTION, ROVER_MOVEMENT } from '../../common/constants';
import { isCorrectMovement } from '../../common/helpers';

const getObstacleFound = ({ x, y }) => `Obstacle - X${x}, Y${y}`;

const getStateCheckingMovement = ({
  grid,
  obstaclesCoordinates,
  newDirection,
  newPosition,
  state,
}) => {
  if (isCorrectMovement({ grid, obstaclesCoordinates, newPosition })) {
    return {
      current: newPosition,
      direction: newDirection,
      log: [state.current, ...state.log],
    };
  }
  return { ...state, log: [getObstacleFound(newPosition), ...state.log] };
};

export const getNewRoverState = ({
  current,
  direction,
  grid,
  obstaclesCoordinates,
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
          break;
        }
        case ROVER_DIRECTION.S: {
          newPosition.y = newPosition.y - 1;
          break;
        }
        case ROVER_DIRECTION.W: {
          newPosition.x = newPosition.x - 1;
          break;
        }
        case ROVER_DIRECTION.E: {
          newPosition.x = newPosition.x + 1;
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
    obstaclesCoordinates,
    newDirection: newDirection ?? direction,
    newPosition,
    state,
  });
};
