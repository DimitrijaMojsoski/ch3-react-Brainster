import HeaderCover from "./raw/Girls-Listen-Music_0.jpg";
import "./App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={`/`}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              opacity: "0.6",
              zIndex: "1",
            }}
          />

          <div
            style={{
              position: "absolute",
              display: "flex",
              top: "0",
              left: "0",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              color: "white",
              zIndex: "2",
            }}
          >
            <h1>MUSIC DB</h1>
          </div>

          <img
            src={HeaderCover}
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </div>
      </Link>
    </header>
  );
}

export default Header;
