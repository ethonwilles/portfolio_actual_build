import React from "react";

import profPic from "../../assets/images/profile_pic.jpg";
const Contact = () => {
  return (
    <div className="contact-page">
      <div className="picture"></div>
      <div className="contact-content">
        <h1>
          <i class="fas fa-phone-alt"></i>801-691-2737
        </h1>
        <h1>
          ethonwilles@gmail.com<i class="far fa-envelope"></i>
        </h1>
        <h1>
          <a
            href="https://www.linkedin.com/in/ethon-willes-87bb73191/"
            target="_blank"
          >
            <i class="fab fa-linkedin-in"></i>ethonwilles
          </a>{" "}
        </h1>
      </div>
    </div>
  );
};
export default Contact;
