import React from "react";
import NavBar from "./navbar";

const Education = () => {
  return (
    <div className="edu main">
      <NavBar />

      <div className="edu-content">
        <div className="bottega-img">
          <a
            href="https://bottega.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://bottega.tech/wp-content/uploads/2017/04/black-n.png"
              alt="Bottega.tech logo"
            />
          </a>
        </div>
        <i class="fas fa-scroll"></i>
        <div className="bottega-desc">
          <p>August 2019 - November 2019</p>
          <h2>
            Full-Stack Web Development Certificate & Accredited Certificate of
            Competency
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Education;
