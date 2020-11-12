import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoListItem from './VideoListItem';

const list = { id: '1c0573e9-2e59-48c8-9b0b-ec5f63afbe0d', name: 'купить слона за 150 рублей', size: '330MB' };

test('check renders Component', () => {
  render(<VideoListItem video={list}/>);
  expect(screen.getByText(/купить слона/i)).toBeInTheDocument();
  expect(screen.getByText(/330/i)).toBeInTheDocument();
});
