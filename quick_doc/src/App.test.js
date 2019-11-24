import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Pageone from './App.js';
import { render, fireEvent } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Page one renders without crashing', () => {
  const switch_page = jest.fn()
  const set_coordinates = jest.fn()
  
  const {getByTestId} = render(<Pageone pagestate={1} switch_page={switch_page}/>)

  fireEvent.click(getByTestId('pageChange'))
  expect(changePage).toHaveBeenCalled(1)
});
