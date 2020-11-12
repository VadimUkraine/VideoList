import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import FileInputField from './FileInputField';
import configureStore from '../../../redux/store';

const store = configureStore();

beforeEach(() => render(
  <Provider store={store}>
    <FileInputField/>
  </Provider>,
));

test('it render component', () => {
  expect(screen.getByLabelText(/Choose video to upload/i)).toBeInTheDocument();
});

test('it checks uploading the file', () => {
  const videoInput = screen.getByLabelText(/Choose video to upload/i);
  const file = new File(['dummy content'], 'example.avi', { type: 'video/avi' });
  fireEvent.change(videoInput, { target: { files: [file] } });
  fireEvent.input(videoInput);
  expect(screen.getByText(/example.avi/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Upload file' })).toBeInTheDocument();
});
