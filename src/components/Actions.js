import React from 'react';
import styled from 'styled-components';

import InstructionsForm from './InstructionsForm';

const Actions = ({ className }) => (
  <div className={className}>
    <InstructionsForm />
  </div>
);

const styledActions = styled(Actions)`
  display: inline-block;
  overflow: hidden;
  border: 1px solid black;
  padding: 20px;
  width: 200px;
  border-radius: 10px;

  @media (max-width: 900px) {
    margin-top: 15px;
  }
`;

export default styledActions;
