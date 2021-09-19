import { ROVER_CLEAR, ROVER_NEW_INSTRUCTIONS, ROVER_NEW_MOVE, ROVER_SET_POSITION } from './actionTypes';

export const roverClear = () => ({
  type: ROVER_CLEAR,
});

export const roverNewInstructionsMove = ({
  instructions,
  grid,
}) => ({
  type: ROVER_NEW_INSTRUCTIONS,
  payload: {
    instructions,
    grid,
  },
});

export const roverNewKeyboardMove = ({ code, grid }) => ({
  type: ROVER_NEW_MOVE,
  payload: {
    code,
    grid,
  },
});

export const roverSetPosition = position => ({
  type: ROVER_SET_POSITION,
  payload: {
    position,
  },
});
