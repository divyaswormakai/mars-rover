import { ROVER_CLEAR, ROVER_SET_OBSTACLES } from '../../actions/actionTypes';
import reducer from '../obstacles';

describe('Reducer src/reducers/obstacles.js: ', () => {
  const defaultState = [];

  it('Default', () => {
    const action = {};
    const initialState = undefined;
    expect(reducer(initialState, action)).toEqual(defaultState);
  });

  describe('Actions:', () => {
    it('ROVER_CLEAR', () => {
      const action = { type: ROVER_CLEAR };
      const initialState = undefined;

      expect(reducer(initialState, action)).toEqual(defaultState);
    });

    it('ROVER_SET_OBSTACLES', () => {
      const action = {
        type: ROVER_SET_OBSTACLES,
        payload: { obstacles: [{ x: 1, y: 1 }] },
      };
      const initialState = [{ x: 0, y: 0 }];
      const expectedState = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
      ];

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
