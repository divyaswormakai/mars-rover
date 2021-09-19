import { ROVER_CLEAR, ROVER_NEW_INSTRUCTIONS, ROVER_NEW_MOVE, ROVER_SET_POSITION } from '../actionTypes';
import { roverClear, roverNewInstructionsMove, roverNewKeyboardMove, roverSetPosition } from '../roverActions';

describe('Actions src/actions/roverActions', () => {
  it('roverClear', () => {
    const expected = { type: ROVER_CLEAR };
    const actual = roverClear();

    expect(actual).toEqual(expected);
  });

  it('roverNewInstructionsMove', () => {
    const instructions = 'instructions';
    const grid = 'grid';
    const expected = {
      type: ROVER_NEW_INSTRUCTIONS,
      payload: { instructions, grid },
    };
    const actual = roverNewInstructionsMove({
      instructions,
      grid,
    });

    expect(actual).toEqual(expected);
  });

  it('roverNewKeyboardMove', () => {
    const code = 'code';
    const grid = 'grid';
    const expected = {
      type: ROVER_NEW_MOVE,
      payload: { code, grid },
    };
    const actual = roverNewKeyboardMove({ code, grid });

    expect(actual).toEqual(expected);
  });

  it('roverSetPosition', () => {
    const position = 'position';
    const expected = { type: ROVER_SET_POSITION, payload: { position } };
    const actual = roverSetPosition(position);

    expect(actual).toEqual(expected);
  });
});
