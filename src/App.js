import React from "react";
import "./App.css";
import Profile from "./Comps/Profile";
import Searchbar from "./Comps/Searchbar"; // Import the Searchbar component

function App() {
  return (
    <div className="container">
      <div className="left">
        <Profile />
      </div>
      <div className="middle">
        <div className="middle-top">
          <Searchbar /> {/* Add the Searchbar component here */}
        </div>
        <div className="middle-bottom">
          <p>Main</p>
          <p>Ikaw ra usa mag code pag kugi</p>
          <p>Kaduwaon ko</p>
        </div>
      </div>
      <div className="right">Right</div>
    </div>
  );
}

export default App;
