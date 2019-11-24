import React from 'react';
import ReactDOM from 'react-dom';
import {App, Pageone, PageThree} from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Page one renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pageone />, div); //'div' is target container that component renders in
  ReactDOM.unmountComponentAtNode(div);
});
