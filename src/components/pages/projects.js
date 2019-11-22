import React from "react";
import { Link } from "react-router-dom";

import logoDark from "./logo-dark.png";
import constHat from "../../assets/images/consthat.jpg";
import barb from "../../assets/images/barbell.png";
import reactLogo from "../../assets/images/react.png";
const Projects = () => {
  const githubRepo = "https://github.com/ethonwilles?tab=repositories";
  return (
    <div className="projects-page">
      <a href={githubRepo} target="_blank" className="project-card one">
        <img src={logoDark} alt="logo" />
        <h3>DevCamp Fries</h3>
        <h5>Click Me!</h5>
        <ul>
          <h4>Languages Used: </h4>
          <li>HTML</li>
          <li>CSS</li>
          <h4>Tools Used:</h4>
          <li>FlexBox</li>
          <li>CSS Grid</li>
        </ul>
      </a>
      <a
        href="https://github.com/ethonwilles/cns-site"
        target="_blank"
        className="project-card two"
      >
        <img src={constHat} alt="logo" />
        <h3>CNS Contractors Website</h3>
        <h5>Click Me!</h5>
        <ul>
          <h4>Languages Used: </h4>
          <li>Javascript</li>
          <li>Python</li>
          <h4>Frameworks Used:</h4>
          <li>ReactJS</li>
          <li>Flask</li>
        </ul>
      </a>
      <a
        href="https://github.com/ethonwilles/invoice_creator"
        target="_blank"
        className="project-card three"
      >
        <img src={constHat} alt="logo" />
        <h3>Invoice Automation</h3>
        <h5>Click Me!</h5>
        <ul>
          <h4>Languages Used: </h4>
          <li>Python</li>
          <h4>Libraries Used:</h4>
          <li>Python-Docx</li>
        </ul>
      </a>
      <a
        href="https://github.com/kysen/big-mountain-barbell"
        target="_blank"
        className="project-card four"
      >
        <img src={barb} alt="logo" />
        <h3>BMB Website</h3>
        <h5>Click Me!</h5>
        <ul>
          <h4>Languages Used: </h4>
          <li>Javascript</li>
          <li>JSX</li>
          <li>SCSS</li>
          <h4>Frameworks Used:</h4>
          <li>ReactJS</li>
        </ul>
      </a>
      <Link to="/" className="project-card four">
        <img src={reactLogo} alt="logo" />
        <h3>More To Come...</h3>
      </Link>
    </div>
  );
};
export default Projects;
