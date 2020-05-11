import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/images/alt_prof.jpg";
const NavBar = () => {
  return (
    <div className="navbar">
      <img src={profilePic} />
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/edu">Education</Link>
      <Link to="/exp">Experience</Link>
    </div>
  );
};
export default NavBar;
