import React, { useRef } from "react";
import "../CSS/maincont.css";

const MainContent = () => {
  const recentlyPlayedRef = useRef(null);

  const scrollLeft = () => {
    recentlyPlayedRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    recentlyPlayedRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="main-content">
      {/* Recently Played Section */}
      <div className="recently-played">
        <h3>Recently Played</h3>
        <div className="arrow left" onClick={scrollLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </div>
        <div className="recently-played-row" ref={recentlyPlayedRef}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="recently-played-card" key={index}>
              <img
                src="https://placehold.co/150x150?text=Album+Art"
                alt="Album Art"
                className="album-art"
              />
              <p className="song-title">Song Title {index + 1}</p>
              <p className="artist-name">Artist Name</p>
              <div className="card-actions">
                <img
                  src="https://placehold.co/20x20?text=Fav"
                  alt="Favorite Icon"
                  className="fav-icon"
                />
                <img
                  src="https://placehold.co/20x20?text=Play"
                  alt="Play Icon"
                  className="play-icon"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="arrow right" onClick={scrollRight}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </div>
      </div>

      {/* Carved for You Section */}
      <div className="carved-for-you">
        <h3>Carved for You</h3>
        <div className="music-cards">
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="music-card" key={index}>
              <img
                src="https://placehold.co/150x150?text=Album+Art"
                alt="Album Art"
                className="album-art"
              />
              <div className="card-details">
                <p className="song-title">Song Title {index + 1}</p>
                <p className="artist-name">Artist Name</p>
              </div>
              <div className="card-actions">
                <img
                  src="https://placehold.co/20x20?text=Fav"
                  alt="Favorite Icon"
                  className="fav-icon"
                />
                <img
                  src="https://placehold.co/20x20?text=Play"
                  alt="Play Icon"
                  className="play-icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
