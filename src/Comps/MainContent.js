import React, { useRef } from "react";
import "../CSS/maincont.css";
import Silakbo from '../assets/Images/Silakbo.jpg';
import Fav from '../assets/Icons/favoritesw.svg';
import Play from '../assets/Icons/playw.svg';
import TTC from '../assets/Images/TTC.jpg';

const uploadedCover = null; // Placeholder for now

const MainContent = () => {
  const recentlyPlayedRef = useRef(null);
  const carvedRef = useRef(null);
  const playlistRef = useRef(null);
  const artistsRef = useRef(null);

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

  const scrollPlaylistLeft = () => {
    playlistRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollPlaylistRight = () => {
    playlistRef.current.scrollBy({
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
                src={Silakbo}
                alt="Album Art"
                className="album-art"
              />
              <div className="card-details">
              <p className="song-title">Multo {index + 1}</p>
              <p className="artist-name">Cup of Joe</p>
              <div className="card-actions">
                <img
                  src={Fav}
                  alt="fav Icon"
                  className="fav-icon"
                />
                <img
                  src={Play}
                  alt="Play Icon"
                  className="play-icon"
                />
              </div>
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
        <div className="carved-row-wrapper">
          <div className="arrow left" onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </div>
          <div className="carved-row" ref={carvedRef}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="recently-played-card" key={index}>
                <img
                  src={TTC}
                  alt="Album Art"
                  className="album-art"
                />
                <div className="card-details">
                  <p className="album-title">Welcome Tapuwan</p> {/* Updated class */}
                  <p className="album-desc">Pagkuhig code oi bomboang, ikaw sige kag kilig kilig torpeng dako murag buang kaman</p>
                  <div className="card-actions">
                    <img
                      src={Fav}
                      alt="Favorite Icon"
                      className="fav-icon"
                    />
                    <img
                      src={Play}
                      alt="Play Icon"
                      className="play-icon"
                    />
                  </div>
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
      </div>

      {/* Playlist Section */}
      <div className="playlist-section">
        <h3>Your Playlists</h3>
        <div className="playlist-row-wrapper">
          <div className="arrow left" onClick={scrollPlaylistLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </div>
          <div className="playlist-row" ref={playlistRef}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="playlist-card" key={index}>
                <div className="playlist-thumbnail collage">
                  <img
                    src={Silakbo} // Quadrant 1
                    alt="Collage Part 1"
                    className="collage-part collage-part-1"
                  />
                  <img
                    src={TTC} // Quadrant 2
                    alt="Collage Part 2"
                    className="collage-part collage-part-2"
                  />
                  <img
                    src="https://placehold.co/150x150" // Placeholder for Quadrant 3
                    alt="Collage Part 3"
                    className="collage-part collage-part-3"
                  />
                  <img
                    src="https://placehold.co/150x150" // Placeholder for Quadrant 4
                    alt="Collage Part 4"
                    className="collage-part collage-part-4"
                  />
                </div>
                <p className="playlist-title">Playlist {index + 1}</p>
              </div>
            ))}
          </div>
          <div className="arrow right" onClick={scrollPlaylistRight}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Featured Artists Section */}
      <div className="featured-artists-section">
        <h3>Featured Artists</h3>
        <div className="artists-row-wrapper">
          <div className="arrow left" onClick={() => artistsRef.current.scrollBy({ left: -200, behavior: "smooth" })}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
          </div>
          <div className="artists-row" ref={artistsRef}>
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="artist-card" key={index}>
                <img
                  src={`https://placehold.co/100x100`} // Placeholder for artist image
                  alt={`Artist ${index + 1}`}
                  className="artist-image"
                />
                <p className="artist-name">Artist {index + 1}</p>
              </div>
            ))}
          </div>
          <div className="arrow right" onClick={() => artistsRef.current.scrollBy({ left: 200, behavior: "smooth" })}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MainContent;
