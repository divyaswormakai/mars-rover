import { combineReducers } from 'redux';

import grid from './grid';
import rover from './rover';

const reducers = {
  grid,
  rover,
};

export const getGrid = state => state.grid;
export const getRover = state => state.rover;

export default combineReducers(reducers);
