import React from "react";
import NavBar from "./navbar";
import profilePic from "../assets/images/alt_prof.jpg";

const Abt = () => {
  return (
    <div className="abt main">
      <NavBar />
      <div className="abt-content">
        <h1>About Me</h1>
        <img src={profilePic} />
        <p>
          Hello! My name is Ethon Willes, and I want to be your next developer.
          I have lived in Utah my whole life, more specifically I have lived in
          Utah County my whole life. MORE specifcally I have lived in Lehi, Utah
          County, Utah my whole life. I have some serious loyalty to this
          state;) I have always had a hard work ethic drilled into me since day
          one. Since the age of 8, until the age of 16, I had a job working and
          maintaining mink farms. Yes, I've worked in a mink farm. If you're
          from lehi or the surrounding cities, this is a big deal because most
          people have so many questions as to what goes on in them. Lots of hard
          work and long days. I graduated from Lehi High School in 2017, and
          decided to go to Utah Valley University. About a year in, I decided
          college was not the most efficient way to find a job, So I enrolled in
          a coding bootcamp. I received my first job out of the bootcamp in
          November 2019, and have been working there ever since. My life has
          recently taken a turn, and I am currently looking for new
          opportunities.{" "}
          <span>
            Some hobbies I enjoy include but are not limited to shooting, dirt
            bike riding, camping, fishing, coding, video games, and gardening.
            On the weekends, you can most definitely find me doing one of these
            things.
          </span>
          <span>
            I thoroughly enjoy learning new things when it comes to coding. I am
            currently taking a Udemy course on Node.js, and also have made it a
            goal to become a machine learning engineer sometime in the future. I
            absolutely love coding out APIs in both Python Flask, and Node.js
            Express.
          </span>
          <span> I look forward to joining your development team!</span>
          <span>- Ethon</span>
        </p>
      </div>
    </div>
  );
};
export default Abt;
