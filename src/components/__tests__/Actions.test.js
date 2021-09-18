import 'jest-styled-components';

import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

import { mockComponent } from '../../common/testHelpers';
import Actions from '../Actions';

jest.mock('../InstructionsForm', () => props =>
  mockComponent('InstructionsForm', props)
);


describe('Actions test suite', () => {
  const component = <Actions />;

  const setup = () => render(component);

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match snapshot', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
