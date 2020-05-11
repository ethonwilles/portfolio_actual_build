import React from "react";
import profilePic from "../assets/images/profile_pic.jpg";
import NavBar from "./navbar";
const Contact = () => {
  return (
    <div className="contact">
      <NavBar />
      <div className="contact-content">
        <div className="pic">{/* <img src={profilePic} alt="a" /> */}</div>
        <div className="info">
          <h1>
            <i class="fas fa-phone-alt"></i>801-691-2737
          </h1>
          <h1>
            <i class="fas fa-envelope"></i>ethonwilles@gmail.com
          </h1>
          <a
            href="https://www.linkedin.com/in/ethon-willes-87bb73191/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>
              <i class="fab fa-linkedin"></i>ethonwilles
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
