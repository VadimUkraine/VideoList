import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import FileInputField from './FileInputField';
import configureStore from '../../../redux/store';

const store = configureStore();

test('check renders Component and failed uploading the file', async () => {
  render(<Provider store={store}>
    <FileInputField/>
  </Provider>);
  const videoInput = screen.getByLabelText(/Choose video to upload/i);
  expect(videoInput).toBeInTheDocument();

  const file = new File(['dummy content'], 'example.avi', { type: 'video/avi' });
  fireEvent.change(videoInput, { target: { files: [file] } });
  fireEvent.input(videoInput);

  expect(screen.getByText(/example.avi/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Upload file' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Upload file' }));

  const failUpload = await screen.findByText(/Error in Upload/i);
  expect(failUpload).toBeInTheDocument();
});
