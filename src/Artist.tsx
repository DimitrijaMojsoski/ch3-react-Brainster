import React from "react";
import { Link } from "react-router-dom";

import { Artist } from "./types";

import JimiHendrix from "./covers/jimi_hendrix.jpg";
import JohnyCash from "./covers/johnny_cash.jpg";
import Madonna from "./covers/madonna.jpg";
import PinkFloyd from "./covers/pink_floyd.jpg";

import ElectricLadyland from "./albums/electric-ladyland.jpg";
import Experienced from "./albums/experienced.jpg";
import IsleOfWright from "./albums/isle_of_wright.jpg";
import BandOfGypsys from "./albums/band_of_gypsys.jpg";
import LikeAVirgin from "./albums/like_a_virgin.jpg";
import TrueBlue from "./albums/true_blue.png";
import Erotica from "./albums/erotica.jpg";
import RayOfLight from "./albums/ray_of_light.jpg";
import NoGrave from "./albums/no_grave.jpg";
import AmongStars from "./albums/among_stars.jpg";
import SolitaryMan from "./albums/solitary_man.jpg";
import ManComesAround from "./albums/man_comes_around.jpg";
import TheWall from "./albums/the_wall.jpg";
import DarkSide from "./albums/dark_side.jpg";
import Animals from "./albums/animals.jpg";

interface Props {
  artist: Artist;
}

const ArtistPage: React.FC<Props> = ({ artist }) => {
  const getArtistCover = () => {
    switch (artist.id) {
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

  const getAlbumCover = (albumId: string) => {
    switch (albumId) {
      case "a1":
        return ElectricLadyland;
      case "a2":
        return Experienced;
      case "a3":
        return IsleOfWright;
      case "a4":
        return BandOfGypsys;
      case "b1":
        return LikeAVirgin;
      case "b2":
        return TrueBlue;
      case "b3":
        return Erotica;
      case "b4":
        return RayOfLight;
      case "c1":
        return NoGrave;
      case "c2":
        return AmongStars;
      case "c3":
        return SolitaryMan;
      case "c4":
        return ManComesAround;
      case "d1":
        return TheWall;
      case "d2":
        return DarkSide;
      case "d3":
        return Animals;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "lightgrey",
        padding: "40px 20px",
      }}
    >
      <img src={getArtistCover()} width={200} height={200} alt={artist.name} />
      <h2>{artist.name}</h2>
      <p style={{ fontSize: "20px", textAlign: "center" }}>{artist.bio}</p>
      <div>
        {artist.albums.map((album) => (
          <Link
            to={`/artist/${artist.id}/${album.albumId}`}
            style={{ width: "50%", height: "50%", marginBottom: "-10px" }}
          >
            <img
              src={getAlbumCover(album.albumId)}
              style={{ width: "50%", height: "50%" }}
              alt={album.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
