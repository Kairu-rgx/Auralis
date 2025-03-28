import React, { useState } from "react";
import "../CSS/Profile.css";
import HomeIcon from "../assets/Icons/home.svg";
import PlaylistIcon from "../assets/Icons/playlistw.svg";
import SearchIcon from "../assets/Icons/searchw.svg";
import NotificationsIcon from "../assets/Icons/bellw.svg";
import ProfileImage from "../assets/Images/Nyxitup.jpg"; // Profile image
import FriendIcon from "../assets/Images/kairu.jpg"; // Friend's profile image

function Profile() {
  const [active, setActive] = useState("Home");
  const [showDropup, setShowDropup] = useState(false);

  const handleClick = (bar) => {
    setActive(bar);
  };

  const toggleDropup = () => {
    setShowDropup((prev) => !prev);
  };

  return (
    <div className="profile">
      <h2>Auralis</h2>
      <div
        className={`profile-bar ${active === "Home" ? "active" : ""}`}
        onClick={() => handleClick("Home")}
      >
        <img src={HomeIcon} alt="Home" className="profile-bar-icon" />
        Home
      </div>
      <div
        className={`profile-bar ${active === "Search" ? "active" : ""}`}
        onClick={() => handleClick("Search")}
      >
        <img src={SearchIcon} alt="Search" className="profile-bar-icon" />
        Search
      </div>
      <div
        className={`profile-bar ${active === "Playlists" ? "active" : ""}`}
        onClick={() => handleClick("Playlists")}
      >
        <img src={PlaylistIcon} alt="Playlists" className="profile-bar-icon" />
        Playlists
      </div>
      <div
        className={`profile-bar ${active === "Notifications" ? "active" : ""}`}
        onClick={() => handleClick("Notifications")}
      >
        <img src={NotificationsIcon} alt="Notifications" className="profile-bar-icon" />
        Notifications
      </div>

      {/* Friends Section */}
      <div className="friends-section">
        <h3>Friends</h3>
        <div className="friend">
          <img src={FriendIcon} alt="Friend" className="friend-icon" />
          <div className="friend-info">
            <span className="friend-name">Kairu</span>
            <span className="friend-listening">Listening to</span>
            <span className="friend-music">Multo</span>
            <span className="friend-artist">Cup of Joe</span>
          </div>
        </div>
      </div>

      {/* Profile Button */}
      <div className="profile-button" onClick={toggleDropup}>
        <div className="profile-photo">
        <img src={ProfileImage} alt="Profile" />
      </div>
      <div className="profile-name">Nyxitup</div>
      <div className="profile-arrow">{showDropup ? "▲" : "▼"}</div>
    </div>

    {/* Drop-up Menu */}
    <div className={`dropup-menu ${showDropup ? "show" : ""}`}>
      <div className="dropup-item">Switch Account</div>
      <div className="dropup-item">Add New Account</div>
    </div>
        </div>
      );
}

export default Profile;