import React from 'react';

import { KEYBOARDS_CODES, ROVER_DIRECTION, ROVER_MOVEMENT } from './constants';

const isCoordinateInsideGrid = (grid, newPosition) =>
  newPosition.x >= 0 &&
  newPosition.x <= grid.x &&
  newPosition.y >= 0 &&
  newPosition.y <= grid.y;

export const getDirectionArrow = direction => {
  switch (direction) {
    case ROVER_DIRECTION.W:
      return <>&#8592;</>;

    case ROVER_DIRECTION.E:
      return <>&#8594;</>;

    case ROVER_DIRECTION.S:
      return <>&#8595;</>;

    case ROVER_DIRECTION.N:
    default:
      return <>&#8593;</>;
  }
};

export const getRandomCoordinates = ({ x, y }) => {
  const coordinates = [];

    const newX = Math.floor(Math.random() * (x - 0));
    const newY = Math.floor(Math.random() * (y - 0));
   
      coordinates.push({
        x: newX,
        y: newY,
      });
    

  return [...new Set(coordinates)];
};

export const getRandomRoverPosition = (grid) => {
  const roverPosition = getRandomCoordinates(grid)[0];

  return roverPosition
  

};

export const getRoverMovementFromCode = code => {
  switch (code) {
    case KEYBOARDS_CODES.A:
      return ROVER_MOVEMENT.L;
    case KEYBOARDS_CODES.D:
      return ROVER_MOVEMENT.R;
    case KEYBOARDS_CODES.W:
      return ROVER_MOVEMENT.F;
    default:
      return null;
  }
};

export const getValidInstructions = instruction =>
  instruction
    ?.toUpperCase?.()
    .split('')
    .filter(item => Object.keys(ROVER_MOVEMENT).includes(item))
    .join('') ?? '';

export const isCorrectMovement = ({
  newPosition,
  grid,
}) => {
  const isInsideGrid = isCoordinateInsideGrid(grid, newPosition);
  return  isInsideGrid;
};
