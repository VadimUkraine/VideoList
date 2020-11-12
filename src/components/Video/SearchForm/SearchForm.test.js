import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';
import configureStore from '../../../redux/store';

const store = configureStore();
const handleSearch = jest.fn();

test('check renders Component, its children and event of searching video', () => {
  render(<Provider store={store}>
            <SearchForm onSearch={handleSearch}/>
           </Provider>);

  const buttonSearch = screen.getByRole('button', { name: 'Search' });
  const inputSearch = screen.getByRole('textbox');
  expect(buttonSearch).toBeInTheDocument();
  expect(inputSearch).toBeInTheDocument();

  fireEvent.change(inputSearch, {
    target: { value: 'JavaScript' },
  });

  expect(inputSearch.value).toBe('JavaScript');

  fireEvent.click(buttonSearch);
  expect(handleSearch).toHaveBeenCalledTimes(1);
});
