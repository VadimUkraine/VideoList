import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoList from './VideoList';

const list = [
  { id: '1c0573e9-2e59-48c8-9b0b-ec5f63afbe0d', name: 'funny cats', size: '330MB' },
  { id: 'a1f80f52-1690-4c20-a74b-32ac420ece61', name: 'funny cats and dogs', size: '1001MB' },
  { id: 'a52dfc2d-0d70-49b9-b58f-21b8ea2408d4', name: 'funny cats, dogs and so on', size: '2000MB' },
];

test('it render list of videos', () => {
  render(<VideoList videos={list}/>);
  expect(screen.getAllByText(/cats/i)).toHaveLength(3);
  expect(screen.getByText(/330/i)).toBeInTheDocument();
});
