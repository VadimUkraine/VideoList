import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({ onSearch, onInputText, text }) => {

  const handleChange = (e) => {
    onInputText(e.target.value);
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
        value={text}
      />
      <button type="button" className="search-clear-btn" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onInputText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
