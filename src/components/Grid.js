import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getDirectionArrow } from '../common/helpers';
import { getGrid, getObstacles, getRover } from '../reducers';

const Grid = ({
  className,
  obstacles,
  grid: { x, y },
  rover: { current, direction },
}) => {
  const renderGrid = () => {
    const gridItems = [];
    const columns = x;
    const rows = y;
    let iRows = 0;
    const obstaclesAvailable = [...obstacles];
    for (iRows; iRows <= rows; iRows++) {
      let iColumns = 0;
      const rowItems = [];

      for (iColumns; iColumns <= columns; iColumns++) {
        const xCoordinate = iColumns;
        const yCoordinate = rows - iRows;
        const id = `${xCoordinate}-${yCoordinate}`;
        let isObstacle = false;
        let isRoverPosition = false;

        if (xCoordinate === current?.x && yCoordinate === current?.y) {
          isRoverPosition = true;
        } else if (obstaclesAvailable.length) {
          const obstacleIndex = obstaclesAvailable.findIndex(
            obstacle => obstacle.x === xCoordinate && obstacle.y === yCoordinate
          );
          if (obstacleIndex !== -1) {
            isObstacle = true;
            obstaclesAvailable.splice(obstacleIndex, 1);
          }
        }

        rowItems.push(
          <div
            className={`grid-square ${
              isRoverPosition
                ? 'grid-square-rover'
                : isObstacle
                ? 'grid-square-obstacle'
                : ''
            }`}
            id={id}
            key={id}
          >
            {isRoverPosition ? (
              <span className="grid-arrow">{getDirectionArrow(direction)}</span>
            ) : (
              ''
            )}
          </div>
        );
      }

      gridItems.push(
        <div key={iRows} className="grid-rows">
          {rowItems}
        </div>
      );
    }

    return gridItems;
  };

  return <div className={className}>{renderGrid().map(item => item)}</div>;
};

const StyledGrid = styled(Grid)`
  display: inline-block;
  margin-bottom: 15px;
  vertical-align: top;

  .grid-rows {
    line-height: 0;
    margin: 0;

    .grid-square {
      border-top: 1px solid #24292e;
      border-right: 1px solid #24292e;
      display: inline-block;
      height: 2rem;
      position: relative;
      width: 2rem;

      &:first-child {
        border-left: 1px solid #24292e;
      }
      &-obstacle {
        background-color: #fd335a;
      }

      &-rover {
        background-color: #44b881;
      }

      .grid-arrow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.5rem;
        color: white;
      }
    }
  }

  div:last-of-type .grid-square {
    border-bottom: 1px solid #24292e;
  }

  @media (max-width: 500px) {
    .grid-rows {
      .grid-square {
        width: 1.25rem;
        height: 1.25rem;
      }
      .grid-arrow {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 350px) {
    .grid-rows {
      .grid-square {
        width: 0.75rem;
        height: 0.75rem;
      }
      .grid-arrow {
        font-size: 0.5rem;
      }
    }
  }
`;

const mapStateToProps = state => ({
  obstacles: getObstacles(state),
  grid: getGrid(state),
  rover: getRover(state),
});

export default connect(mapStateToProps, {})(StyledGrid);
