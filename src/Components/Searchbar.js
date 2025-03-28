import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import "../CSS/Searchbar.css";


const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const fetchResults = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    console.log('Fetching results for:', searchQuery);
    const results = [`${searchQuery} Song 1`, `${searchQuery} Song 2`, `${searchQuery} Artist`];
    setSearchResults(results);
  };

  const handleInputChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    fetchResults(searchQuery);
  };

  const handleResultClick = (selectedResult) => {
    console.log('User selected:', selectedResult);
    setQuery(selectedResult);
    setSearchResults([]);
    setRecentSearches((prev) => (prev.includes(selectedResult) ? prev : [selectedResult, ...prev].slice(0, 5)));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      console.log('User pressed Enter:', query);
      setSearchResults([]);
      setRecentSearches((prev) => (prev.includes(query) ? prev : [query, ...prev].slice(0, 5)));
    }
  };

  return (
    <div className="search-container">
        <div className={`search-box ${isFocused ? 'focused' : ''}`}>
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="search-input"
      />
    </div>
      {isFocused && searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} onClick={() => handleResultClick(result)}>
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
      {isFocused && recentSearches.length > 0 && (
        <div className="recent-searches">
          <ul>
            {recentSearches.map((search, index) => (
              <li key={index} onClick={() => handleResultClick(search)}>
                {search}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
