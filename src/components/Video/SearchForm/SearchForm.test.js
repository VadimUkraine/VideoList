import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

const handleSearch = jest.fn();

beforeEach(() => render(<SearchForm onSearch={handleSearch}/>));

test('it render search form', () => {
  expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('it check event of searching video', () => {
  const buttonSearch = screen.getByRole('button', { name: 'Search' });
  const inputSearch = screen.getByRole('textbox');

  fireEvent.change(inputSearch, {
    target: { value: 'JavaScript' },
  });
  expect(inputSearch.value).toBe('JavaScript');

  fireEvent.click(buttonSearch);
  expect(handleSearch).toHaveBeenCalledTimes(1);
});
