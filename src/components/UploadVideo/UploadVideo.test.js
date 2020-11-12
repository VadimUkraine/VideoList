import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import UploadVideo from './UploadVideo';
import configureStore from '../../redux/store';

const store = configureStore();

beforeEach(() => render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={UploadVideo} />
    </Router>
  </Provider>,
));

test('it render component', () => {
  expect(screen.getByLabelText(/Choose video to upload/i)).toBeInTheDocument();
});
