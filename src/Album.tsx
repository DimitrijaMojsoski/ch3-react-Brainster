import React from "react";

import { Album } from "./types";

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
  album: Album;
}

const AlbumPage: React.FC<Props> = ({ album }) => {
  const getAlbumCover = () => {
    switch (album.albumId) {
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
        gap: "20px",
      }}
    >
      <img src={getAlbumCover()} width={200} height={200} alt={album.title} />
      <div>
        <strong style={{ fontSize: "20px" }}>Title: </strong>
        <span style={{ fontSize: "20px" }}>{album.title}</span>
      </div>
      <div>
        <strong style={{ fontSize: "20px" }}>Year: </strong>
        <span style={{ fontSize: "20px" }}>{album.year}</span>
      </div>
      <div>
        <strong style={{ fontSize: "20px" }}>Price: </strong>
        <span style={{ fontSize: "20px" }}>{album.price}$</span>
      </div>
    </div>
  );
};

export default AlbumPage;
