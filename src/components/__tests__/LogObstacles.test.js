import 'jest-styled-components';

import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { getObstacles } from '../../reducers';
import state from '../../store/__mocks__/mockState';
import store from '../../store/__mocks__/mockStore';
import LogObstacles from '../LogObstacles';

jest.mock('../../actions/obstaclesActions');
jest.mock('../../reducers');

describe('LogObstacles test suite', () => {
  const component = (
    <Provider store={store}>
      <LogObstacles />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {
    getObstacles.mockReturnValue(state.obstacles);
  });

  afterEach(jest.clearAllMocks);

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
