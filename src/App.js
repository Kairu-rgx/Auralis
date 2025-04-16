import React from "react";
import "./App.css";
import Profile from "./Comps/Profile";
import Searchbar from "./Comps/Searchbar";
import MainContent from "./Comps/MainContent"; // Import MainContent

function App() {
  return (
    <div className="container">
      <div className="left">
        <Profile />
      </div>
      <div className="middle">
        <div className="middle-top">
          <Searchbar />
        </div>
        <div className="middle-bottom">
          <MainContent /> {/* Use MainContent here */}
        </div>
      </div>
      <div className="right">Right</div>
    </div>
  );
}

export default App;
