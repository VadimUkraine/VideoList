import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoListItem from './VideoListItem';

const list = { id: '1c0573e9-2e59-48c8-9b0b-ec5f63afbe0d', name: 'funny cats', size: '330MB' };

test('it render video list item', () => {
  render(<VideoListItem video={list}/>);
  expect(screen.getByText(/funny cats/i)).toBeInTheDocument();
  expect(screen.getByText(/330/i)).toBeInTheDocument();
});
