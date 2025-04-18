import React from "react";
import "../CSS/ControlBar.css";
import SongImage from "../assets/Images/Silakbo.jpg"; // Replace with the actual path to the song image

function ControlBar() {
  return (
    <div className="control-bar">
      {/* Left Section: Song Info */}
      <div className="song-info">
        <img src={SongImage} alt="Silakbo" className="song-image" />
        <div className="song-details">
          <span className="song-name">Silakbo</span>
          <span className="artist-name">Artist Name</span>
        </div>
      </div>

      {/* Center Section: Controls */}
      <div className="mid-controls">
        <div className="controls">
        <button className="control-button">🔀</button> {/* Shuffle */}
        <button className="control-button">⏮</button> {/* Previous */}
        <button className="control-button play-pause">⏯</button> {/* Play/Pause */}
        <button className="control-button">⏭</button> {/* Next */}
        <button className="control-button">🔁</button> {/* Loop */}
        </div>
        <div className="bar">
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <div className="time-info">
          <span className="current-time">0:00</span>
          <span className="total-time">3:45</span>
        </div></div>
        
      </div>

      {/* Right Section */}
      <div className="right-controls">
        <input type="range" className="volume-slider" min="0" max="100" />
        <button className="control-button fullscreen-button">⛶</button>
      </div>

    </div>
  );
}

export default ControlBar;