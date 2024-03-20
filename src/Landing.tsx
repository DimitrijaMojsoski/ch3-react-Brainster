import { Link } from "react-router-dom";
import artists from "./db";
import { Artist } from "./types";

import JimiHendrix from "./covers/jimi_hendrix.jpg";
import JohnyCash from "./covers/johnny_cash.jpg";
import Madonna from "./covers/madonna.jpg";
import PinkFloyd from "./covers/pink_floyd.jpg";

function LandingPage() {
  const getAlbumCover = (id: number) => {
    switch (id) {
      case 1:
        return JimiHendrix;
      case 2:
        return Madonna;
      case 3:
        return JohnyCash;
      case 4:
        return PinkFloyd;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "lightgray",
      }}
    >
      <h2>Browse the artists</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {artists.map((artist: Artist) => {
          return (
            <Link
              to={`/artist/${artist.id}`}
              style={{ position: "relative", marginBottom: "20px" }}
            >
              <img
                src={getAlbumCover(artist.id)}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />

              <div
                style={{
                  position: "absolute",
                  backgroundColor: "royalblue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: "0",
                  left: "0",
                  zIndex: "1",
                }}
              >
                <h2
                  style={{
                    color: "white",
                    font: "bold",
                    margin: 0,
                    padding: "10px 20px",
                  }}
                >
                  {artist.name}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
