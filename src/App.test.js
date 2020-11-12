import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import configureStore from './redux/store';

const store = configureStore();

test('check renders Component and Search button', () => {
  render(<Provider store={store}>
            <App />
          </Provider>);
  expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
});

test('Snapshot of component', () => {
  const tree = render(<Provider store={store}>
    <App />
  </Provider>);
  expect(tree).toMatchSnapshot();
});
