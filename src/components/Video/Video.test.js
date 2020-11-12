import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Video from './Video';
import configureStore from '../../redux/store';

const store = configureStore();

test('check renders Component and its children', () => {
  render(<Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Video} />
        </Switch>
      </Router>
    </Provider>);
  expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Type video name here/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Want to upload a file?' })).toBeInTheDocument();
  expect(screen.getByText(/Name/i)).toBeInTheDocument();
  expect(screen.getByText(/Size/i)).toBeInTheDocument();
});
