import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <h1>Ethon Willes Portfolio</h1>
      <div className="links">
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="bubble-links">
        <div className="bubble">
          <i class="far fa-envelope"></i>
        </div>
        <div className="bubble">
          <i class="fab fa-linkedin"></i>
        </div>
        <a href="/" className="bubble">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};
export default NavBar;
