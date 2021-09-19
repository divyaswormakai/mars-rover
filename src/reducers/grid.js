import { ROVER_CLEAR } from '../actions/actionTypes';

const defaultState = { x: 9, y: 9 };

const grid = (state = defaultState, action) => {
  switch (action.type) {
    // Clear and give the default state
    case ROVER_CLEAR:
      return defaultState;

    default:
      return state;
  }
};

export default grid;
