import React from 'react';

import {
  getDirectionArrow,
  getRandomCoordinates,
  getRandomRoverPosition,
  getRoverMovementFromCode,
  getValidInstructions,
} from '../helpers';
import { KEYBOARDS_CODES, ROVER_DIRECTION, ROVER_MOVEMENT } from '../constants';

describe('helpers', () => {
  const grid = { x: 10, y: 10 };

  beforeEach(() => {
    jest.spyOn(global.Math, 'floor').mockReturnValue(0);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'floor').mockRestore();
  });

  describe('getDirectionArrow', () => {
    it('ROVER_DIRECTION.W', () => {
      expect(getDirectionArrow(ROVER_DIRECTION.W)).toEqual(<>&#8592;</>);
    });

    it('ROVER_DIRECTION.E', () => {
      expect(getDirectionArrow(ROVER_DIRECTION.E)).toEqual(<>&#8594;</>);
    });

    it('ROVER_DIRECTION.S', () => {
      expect(getDirectionArrow(ROVER_DIRECTION.S)).toEqual(<>&#8595;</>);
    });

    it('ROVER_DIRECTION.N', () => {
      expect(getDirectionArrow(ROVER_DIRECTION.N)).toEqual(<>&#8593;</>);
    });

    it('default', () => {
      expect(getDirectionArrow(undefined)).toEqual(<>&#8593;</>);
    });
  });


  describe('getRandomRoverPosition', () => {
    it('should send a correct roverPosition', () => {
      const randomRoverPosition = getRandomRoverPosition(
        grid
    
      );
      const expectedPosition = { x: 0, y: 0 };

      expect(randomRoverPosition).toEqual(expectedPosition);
    });

    
  });

  describe('getRoverMovementFromCode', () => {
    it('KEYBOARDS_CODES.A', () => {
      expect(getRoverMovementFromCode(KEYBOARDS_CODES.A)).toEqual(
        ROVER_MOVEMENT.L
      );
    });

    it('KEYBOARDS_CODES.D', () => {
      expect(getRoverMovementFromCode(KEYBOARDS_CODES.D)).toEqual(
        ROVER_MOVEMENT.R
      );
    });

    it('KEYBOARDS_CODES.W', () => {
      expect(getRoverMovementFromCode(KEYBOARDS_CODES.W)).toEqual(
        ROVER_MOVEMENT.F
      );
    });

    it('default', () => {
      expect(getRoverMovementFromCode(undefined)).toBeNull();
    });
  });

  describe('getValidInstructions', () => {
    it('should return correct values', () => {
      const initialValue = 'FfRrLlQWEqweFfRrLl';
      const expectedValue = 'FFRRLLFFRRLL';

      expect(getValidInstructions(initialValue)).toEqual(expectedValue);
    });

    it('should return empty string if we do not send instructions', () => {
      expect(getValidInstructions()).toEqual('');
    });

    it('should return empty string if we send invalid instruction', () => {
      expect(getValidInstructions(0)).toEqual('');
    });
  });
});
