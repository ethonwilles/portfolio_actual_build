import React from "react";

const Home = () => {
  return (
    <div className="homepage">
      <div className="content">
        <h1>About Me</h1>
        <div className="profile-pic"></div>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          et iste, nesciunt veritatis hic nulla facilis fugit ipsum aperiam quae
          ex, rem laudantium officia nostrum quod sunt perferendis pariatur est
          temporibus ut. Vel distinctio nisi, numquam modi autem voluptates
          cupiditate.
        </h2>
        <div className="information">
          <div className="education">
            <h1>Education</h1>
            <div className="edu-box">
              <ul>
                <li>
                  <h3>Bottega</h3>
                </li>
                <h4>August 2019 - November 2019</h4>
                <p>
                  Accredited Certificate of Competency in Full Stack Web
                  Development
                </p>
                <li>
                  <h3>Mountainland Technical College</h3>
                </li>
                <h4>January 2017 - May 2017</h4>
                <p>Emergency Medical Technician - Basic</p>
                <li>
                  <h3>Utah Valley University</h3>
                </li>
                <h4>September 2017 - Currently Attending</h4>
                <p>Major: Software Engineering</p>
                <li>
                  <h3>Lehi High School</h3>
                </li>
                <h4>August 2014 - May 2017</h4>
                <p>High School Diploma</p>
              </ul>
            </div>
          </div>
          <div className="experience">
            <h1>Experience</h1>
            <div className="exp-box">
              <ul>
                <li>
                  <h3>Exposure LLC</h3>
                </li>
                <h4>November 2019 - November 2019</h4>
                <p>
                  Assisted a small team of developers to create websites for
                  various clients. Worked with javascript, python, Flask API's,
                  ReactJS, SCSS, and CRUD development strategies.
                </p>
                <li>
                  <h3>CNS Contractors</h3>
                </li>
                <h4>December 2017 - May 2018; October 2019 - November 2019</h4>
                <p>
                  December thru May: Worked with a team of workers to frame and
                  roof houses. Worked with various power tools and concise
                  measurements. October 2019 - November 2019: Created a website
                  for this company using ReactJS. Developed an API that connects
                  to the front end to allow Emails to be sent to the owner with
                  information about new clients. Stored these emails in a
                  MongoDB accessed thru python using the library pymongo. Also
                  Developed an automation program for the company that utilized
                  python and a library called python-docx to create invoices in
                  the form of Word documents, and compiled all prices of
                  services rendered into a final total, then sent an email to
                  the vendor with the word document attached.{" "}
                </p>
                <li>
                  <h3>Jimmy Johns Sandwiches</h3>
                </li>
                <h4>May 2018 - August 2019</h4>
                <p>
                  Worked with a team of managers to properly run and maintain a
                  restaurant. Managed shifts to ensure that customer
                  satisfaction was maintained. Managed a team of employees to
                  make sandwiches, take orders, and ensure all resources were
                  available to run the shift without error and complaint.{" "}
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
