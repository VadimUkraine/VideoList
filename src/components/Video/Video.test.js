import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Video from './Video';
import configureStore from '../../redux/store';

const store = configureStore();

beforeEach(() => render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Video} />
    </Router>
  </Provider>,
));

test('it render component', () => {
  expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
});

test('it render input search', () => {
  expect(screen.getByPlaceholderText(/Type video name here/i)).toBeInTheDocument();
});

test('it render link', () => {
  expect(screen.getByRole('link', { name: 'Want to upload a file?' })).toBeInTheDocument();
});

test('it render table header for video list', () => {
  expect(screen.getByText(/Name/i)).toBeInTheDocument();
  expect(screen.getByText(/Size/i)).toBeInTheDocument();
});
