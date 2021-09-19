import state from '../../store/__mocks__/mockState';

import reducer, { getGrid, getRover } from '../index';

describe('Reducer src/reducers/index.js', () => {
  it('Default', () => {
    const action = {};
    const initialState = undefined;
    expect(reducer(initialState, action)).toMatchSnapshot();
  });

  describe('Selectors:', () => {
    it('getGrid', () => {
      expect(getGrid(state)).toMatchSnapshot();
    });
   
    it('getRover', () => {
      expect(getRover(state)).toMatchSnapshot();
    });
  });
});
