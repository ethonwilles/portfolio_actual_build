import React from "react";
import { Link } from "react-router-dom";
const NavBar = props => {
  const clicked = () => {
    props.checker(true);
  };
  return (
    <div className="nav-wrapper">
      <Link to="/" className="abt">
        <h1>
          About Ethon<i class="far fa-address-card"></i>
        </h1>
      </Link>
      <div className="links">
        <Link to="/projects">
          Projects<i class="fab fa-accusoft"></i>
        </Link>
        <Link to="/contact">
          Contact<i class="far fa-address-book"></i>
        </Link>
      </div>
      <div className="bubble-links">
        <Link to="/contact" className="bubble" onClick={clicked}>
          <i class="far fa-envelope"></i>
        </Link>
        <a
          href="https://www.linkedin.com/in/ethon-willes-87bb73191/"
          target="_blank"
          className="bubble"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/ethonwilles/"
          target="_blank"
          className="bubble"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};
export default NavBar;
