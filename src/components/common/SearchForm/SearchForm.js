import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({ onSearch, search }) => {

  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  const handleClear = () => {
    onSearch('');
  };

  return (
    <div className="form-group">
      <input
        type="text"
        name="videoSearch"
        placeholder="Search..."
        id="videoSearch"
        className="text-input"
        onChange={handleChange}
        value={search}
      />
      <button type="button" className="search-clear-btn" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
