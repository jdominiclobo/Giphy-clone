import React from "react";
import { Link } from "react-router-dom";
import { GiFastForwardButton } from "react-icons/gi";
import { FaSearchengin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <GiFastForwardButton style={{ paddingLeft: "30px" }} size="30px" />
      <Link to="/" className="title">
        Giphy
      </Link>
      <div className="links">
        <Link to="/search">
          <FaSearchengin /> Search
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
