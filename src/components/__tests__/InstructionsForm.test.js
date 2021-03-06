import 'jest-styled-components';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { roverNewInstructionsMove } from '../../actions/roverActions';
import { getGrid } from '../../reducers';
import state from '../../store/__mocks__/mockState';
import store from '../../store/__mocks__/mockStore';
import InstructionsForm from '../InstructionsForm';

jest.mock('../../actions/roverActions');
jest.mock('../../reducers');

describe('InstructionsForm test suite', () => {
  const component = (
    <Provider store={store}>
      <InstructionsForm />
    </Provider>
  );

  const setup = () => render(component);

  beforeEach(() => {
    roverNewInstructionsMove.mockReturnValue({
      type: 'roverNewInstructionsMove',
    });
    getGrid.mockReturnValue(state.grid);
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

  it('Should fire roverNewInstructionsMove action', () => {
    const { getByLabelText, getByText } = setup();
    const input = getByLabelText(/instructions/i);
    fireEvent.change(input, { target: { value: 'ffr' } });
    fireEvent.click(getByText('Send'));

    expect(roverNewInstructionsMove).toHaveBeenCalledTimes(1);
  });
});
