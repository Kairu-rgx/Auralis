import React from "react";
import "./App.css";
import Profile from "./components/Profile"; 
function App() {
  return (
    <div className="container">
      <div className="left">
        <Profile /> {/* Add the Profile component here */}
      </div>
      <div className="middle">
        <div className="middle-top">Middle Top</div>
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
