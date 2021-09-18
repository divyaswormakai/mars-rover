import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { getRover } from '../../reducers';

import LogPosition from '../LogPosition';

import store from '../../store/__mocks__/mockStore';
import state from '../../store/__mocks__/mockState';

jest.mock('../../actions/roverActions');
jest.mock('../../reducers');

describe('LogPosition test suite', () => {
  const component = (
    <Provider store={store}>
      <LogPosition />
    </Provider>
  );

  const setup = () => render(component);


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
