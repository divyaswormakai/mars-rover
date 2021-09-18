import { ROVER_CLEAR } from '../actions/actionTypes';

const defaultState = { x: 10, y: 10 };

const grid = (state = defaultState, action) => {
  switch (action.type) {
    case ROVER_CLEAR:
      return defaultState;

    default:
      return state;
  }
};

export default grid;
