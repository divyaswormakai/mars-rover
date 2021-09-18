import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { createObstacles } from '../actions/obstaclesActions';
import { roverClear, roverNewKeyboardMove, roverSetPosition } from '../actions/roverActions';
import { INITIAL_OBSTACLES, KEYBOARDS_CODES } from '../common/constants';
import { getRandomCoordinates, getRandomRoverPosition } from '../common/helpers';
import Actions from '../components/Actions';
import Grid from '../components/Grid';
import LogPosition from '../components/LogPosition';
import Title from '../components/Title';
import { getGrid, getObstacles } from '../reducers';

const Home = ({
  className,
  createObstacles,
  grid,
  obstaclesCoordinates,
  roverClear,
  roverNewKeyboardMove,
  roverSetPosition,
}) => {
  useEffect(() => {
    const obstaclesCoordinates = getRandomCoordinates(grid, INITIAL_OBSTACLES);
    const roverPosition = getRandomRoverPosition(grid, obstaclesCoordinates);
    createObstacles(obstaclesCoordinates);
    roverSetPosition(roverPosition);
  }, [createObstacles, grid, roverSetPosition]);

  useEffect(() => {
    const eventListener = event => {
      const { code } = event;
      switch (code) {
        case KEYBOARDS_CODES.A:
        case KEYBOARDS_CODES.D:
        case KEYBOARDS_CODES.W:
          return roverNewKeyboardMove({ code, grid, obstaclesCoordinates });
        default:
          return null;
      }
    };
    document.addEventListener('keydown', eventListener);
    return () => document.removeEventListener('keydown', eventListener);
  }, [grid, obstaclesCoordinates, roverNewKeyboardMove]);

  useEffect(() => {
    return () => {
      roverClear();
    };
  }, [roverClear]);

  return (
    <div className={className}>
      <header>
        <Title />
      </header>

      <main className="main-container">
        <Grid />
        <div className="main-container-text">
          <Actions />
          <LogPosition />
        </div>
      </main>
    </div>
  );
};

const StyledHome = styled(Home)`
  padding: 50px;
  text-align: center;

  .main-container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  .main-container-text {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 900px) {
    padding: 25px;
    .main-container {
      flex-direction: column;
    }
    .main-container-text {
      width: 100%;
      flex-direction: column;
    }
  }
`;

const mapStateToProps = state => ({
  grid: getGrid(state),
  obstaclesCoordinates: getObstacles(state),
});

export default connect(mapStateToProps, {
  createObstacles,
  roverClear,
  roverNewKeyboardMove,
  roverSetPosition,
})(StyledHome);
