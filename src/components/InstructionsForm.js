import React, { useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { roverNewInstructionsMove } from '../actions/roverActions';
import { getValidInstructions } from '../common/helpers';
import { getGrid, getObstacles } from '../reducers';
import Input from './library/Input';

const InstructionsForm = ({
  className,
  roverNewInstructionsMove,
  grid,
  obstaclesCoordinates,
}) => {
  const inputRef = useRef(null);
  const handleFormSubmit = useCallback(
    event => {
      event.preventDefault();
      const inputValue = event?.target?.instructions?.value;
      const instructions = getValidInstructions(inputValue);

      inputRef.current.value = instructions;
      roverNewInstructionsMove({
        grid,
        instructions,
        obstaclesCoordinates,
      });
      inputRef.current.value = '';
    },
    [grid, obstaclesCoordinates, roverNewInstructionsMove]
  );

  return (
    <form className={className} onSubmit={handleFormSubmit}>
      <div>
        <label className="label" htmlFor="instructions">
          Rover Instructions:
        </label>
        <Input
          type="text"
          name="instructions"
          id="instructions"
          placeholder="Type Rover instructions"
          ref={inputRef}
        />
      </div>
      <p>
        <Input type="reset" value="Reset" className="instructions-reset" />
        <Input className="instructions-send" type="submit" value="Send" />
      </p>
      <div className="instructions">
        <p>
          <b>F:</b>
          <i> Move Forward</i>
        </p>
        <p>
          <b>R:</b>
          <i> Turn Right</i>
        </p>
        <p>
          <b>L:</b>
          <i> Turn Left</i>
        </p>
      </div>
    </form>
  );
};

const StyledInstructionsForm = styled(InstructionsForm)`
  .label {
    display: block;
    margin: 0 0 5px;
  }

  .instructions-reset {
    background-color: #fd335a;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

  .instructions-send {
    margin-left: 15px;
    background-color: #44b881;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

  .instructions {
    text-align: left;
  }
`;

const mapStateToProps = state => ({
  grid: getGrid(state),
  obstaclesCoordinates: getObstacles(state),
});

export default connect(mapStateToProps, {
  roverNewInstructionsMove,
})(StyledInstructionsForm);
