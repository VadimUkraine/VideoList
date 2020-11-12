import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {

  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="form-group">
      <input
        type="text"
        name="videoSearch"
        placeholder="Type video name here"
        id="videoSearch"
        className="text-input"
        onChange={handleChange}
        value={searchText}
      />
      <button type="button" className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
