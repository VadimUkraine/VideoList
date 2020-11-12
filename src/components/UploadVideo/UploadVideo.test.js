import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import UploadVideo from './UploadVideo';
import configureStore from '../../redux/store';

const store = configureStore();

test('check renders Component and its childred', () => {
  render(<Provider store={store}>
            <Router>
              <Switch>
                <Route exact path="/" component={UploadVideo} />
              </Switch>
            </Router>
          </Provider>);
  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose video to upload/i)).toBeInTheDocument();
  expect(screen.getByText(/Back to the list/i)).toBeInTheDocument();
});
