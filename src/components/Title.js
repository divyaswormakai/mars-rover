import React from 'react';
import styled from 'styled-components';

const Title = ({ className }) => (
  <div>
    <h1 className={className}>Mars Rover Mission</h1>
    <h4>10 * 10 in UI</h4>
  </div>
);

const StyledTitle = styled(Title)`
  margin: 0 0 30px;
`;

export default StyledTitle;
