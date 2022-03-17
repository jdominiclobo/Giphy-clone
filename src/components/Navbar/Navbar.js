import React from "react";
import { Link } from "react-router-dom";
import { GiFastForwardButton } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <GiFastForwardButton style={{ paddingLeft: "30px" }} size="30px" />
      <Link to="/" className="title">
        Giphy
      </Link>
      {/* <div className="links" style={{ alignItems: "stretch" }}>
        <Link to="/trending">Trending</Link>
      </div> */}
    </nav>
  );
};
export default Navbar;
