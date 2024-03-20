import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import artists from "./db";
import Header from "./Header";
import ArtistPage from "./Artist";
import { Album, Artist } from "./types";
import LandingPage from "./Landing";
import "./App.css";
import AlbumPage from "./Album";

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="main-content">
          <Header />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            {artists.map((artist: Artist) => (
              <Route
                key={artist.id}
                path={`/artist/${artist.id}`}
                element={<ArtistPage artist={artist} />}
              />
            ))}

            {artists.map((artist: Artist) =>
              artist.albums.map((album: Album) => (
                <Route
                  key={album.albumId}
                  path={`/artist/${artist.id}/${album.albumId}`}
                  element={<AlbumPage album={album} />}
                />
              ))
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
