import React from "react";
import "./App.css";
import Profile from "./Comps/Profile";
import Searchbar from "./Comps/Searchbar";
import MainContent from "./Comps/MainContent";
import Playing from "./Comps/Playing";
import ControlBar from "./Comps/ControlBar"; // Import the ControlBar component

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
          <MainContent />
        </div>
      </div>
      <div className="right">
        <Playing />
      </div>
      <ControlBar />{/* Add the ControlBar component here */}
    </div>
  );
}

export default App;
