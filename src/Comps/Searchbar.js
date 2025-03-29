import React, { useState } from "react";
import "../CSS/Searchbar.css";
import SearchIcon from "../assets/Icons/searchw.svg"; // Replace with your actual icon path

function Searchbar() {
  const [query, setQuery] = useState(""); // Track the input value
  const [results, setResults] = useState([]); // Track search results
  const [recentSearches, setRecentSearches] = useState([]); // Track valid searches
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Control dropdown visibility

  // Mock data for search results
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

  // Handle input change and filter results dynamically
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      // Filter mock data based on the input
      const filteredResults = mockData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults); // Update results with filtered data
      setIsDropdownVisible(true); // Show the dropdown
    } else {
      setResults([]); // Clear results if input is empty
      setIsDropdownVisible(recentSearches.length > 0); // Show recent searches if they exist
    }
  };

  // Handle valid search actions
  const handleSearch = () => {
    if (query.trim() !== "") {
      setRecentSearches((prev) => [...prev, query]); // Add to recent searches
      setResults([]); // Clear results dropdown
      setIsDropdownVisible(false); // Hide the dropdown
      console.log("Search triggered for:", query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search on Enter key
    }
  };

  const handleResultClick = (result) => {
    setRecentSearches((prev) => [...prev, result]); // Add clicked result to recent searches
    setQuery(result); // Update the search bar with the selected result
    setResults([]); // Clear results dropdown
    setIsDropdownVisible(false); // Hide the dropdown
    console.log("User interacted with result:", result);
  };

  // Handle focus and blur events
  const handleFocus = () => {
    setIsDropdownVisible(recentSearches.length > 0 || results.length > 0); // Show dropdown if there’s content
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsDropdownVisible(false); // Hide the dropdown when blurred
    }, 200); // Delay to allow click events to register
  };

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([]); // Clear the recent searches array
    setIsDropdownVisible(false); // Hide the dropdown
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
          onKeyPress={handleKeyPress} // Listen for Enter key
          onFocus={handleFocus} // Show dropdown on focus
          onBlur={handleBlur} // Hide dropdown on blur
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