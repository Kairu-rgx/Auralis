import "../CSS/Playing.css";

const Playing = () => {
  return (
    <div className="playing">
      <h3 className="now-playing-text">Now Playing</h3>
      <div className="playing-album-art">
        <img
          src="https://placehold.co/300x300"
          alt="Album Art"
          className="album-art"
        />
      </div>
      <div className="playing-details">
        <h4 className="playing-title">Song Title</h4>
        <p className="playing-artist">Artist Name</p>
      </div>
      <div className="lyrics-box">
        <h4 className="lyrics-title">Lyrics</h4>
        <p className="lyrics-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="about-artist-box">
        <img
          src="https://placehold.co/300x150" // Replace with the artist's profile image URL
          alt="Artist Profile"
          className="about-artist-image"
        />
        <div className="about-artist-content-wrapper">
          <h4 className="about-artist-title">About the Artist</h4>
          <p className="about-artist-content">
            This artist is known for their unique style and groundbreaking contributions to the music industry. Their work has inspired millions worldwide.
          </p>
        </div>
      </div>
      <div className="credits-box">
        <h4 className="credits-title">Credits</h4>
        <ul className="credits-list">
          <li>Author: John Doe</li>
          <li>Producer: Jane Smith</li>
          <li>Label: MusicWorld Records</li>
        </ul>
      </div>
      <div className="next-queue-box">
        <h4 className="next-queue-title">Next in Queue</h4>
        <ul className="next-queue-list">
          <li>Next Song 1 - Artist 1</li>
        </ul>
      </div>
    </div>
  );
};

export default Playing;