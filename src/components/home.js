import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navbar";
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="content">
        <div className="content-p">
          <p>
            <span>A calligrapher of Code.</span>
            <span>Your next star developer,</span>
            <span>Found Here.</span>
          </p>
        </div>
        <div className="content-link">
          <Link to="/about">
            <button>LEARN MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
