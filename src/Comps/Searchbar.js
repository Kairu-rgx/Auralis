import React, { useState } from "react";
import "../CSS/Searchbar.css";
import SearchIcon from "../assets/Icons/searchw.svg"; 

function Searchbar() {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState([]); 
  const [recentSearches, setRecentSearches] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); 

  
  const mockData = [
    "Song A",
    "Song B",
    "Song C",
    "Artist A",
    "Artist B",
    "Album A",
    "Album B",
    "Playlist A",
    "Playlist B",
  ];

 
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
    
      const filteredResults = mockData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
      setIsDropdownVisible(true);
    } else {
      setResults([]);
      setIsDropdownVisible(recentSearches.length > 0);
    }
  };

 
  const handleSearch = () => {
    if (query.trim() !== "") {
      setRecentSearches((prev) => [...prev, query]); 
      setResults([]); 
      setIsDropdownVisible(false); 
      console.log("Search triggered for:", query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); 
    }
  };

  const handleResultClick = (result) => {
    setRecentSearches((prev) => [...prev, result]); 
    setQuery(result); 
    setResults([]);
    setIsDropdownVisible(false);
    console.log("User interacted with result:", result);
  };


  const handleFocus = () => {
    setIsDropdownVisible(recentSearches.length > 0 || results.length > 0);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsDropdownVisible(false); 
    }, 200); 
  };

  
  const clearRecentSearches = () => {
    setRecentSearches([]); 
    setIsDropdownVisible(false);
  };

  return (
    <div className="searchbar">
      <div className="search-input-container">
        <button
          className="search-icon-button"
          onClick={handleSearch}
          title="Search"
        >
          <img src={SearchIcon} alt="Search" className="search-icon" />
        </button>
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="search-input"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {/* Display search results and recent searches */}
      {isDropdownVisible && (
        <div className="search-results">
          {/* Recent Searches */}
          {query.trim() === "" && recentSearches.length > 0 && (
            <div className="recent-searches">
              <div className="recent-searches-header">
                <h4>Recent Searches</h4>
                <button
                  className="clear-recent-searches"
                  onClick={clearRecentSearches}
                  title="Clear Recent Searches"
                >
                  ✕
                </button>
              </div>
              <ul>
                {recentSearches.map((search, index) => (
                  <li key={index} onClick={() => handleResultClick(search)}>
                    {search}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dynamic Search Results */}
          {query.trim() !== "" && results.length > 0 && (
            <div className="dynamic-results">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="search-result-item"
                  onClick={() => handleResultClick(result)}
                >
                  {result}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Searchbar;