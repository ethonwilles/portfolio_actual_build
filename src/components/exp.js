import React from "react";
import NavBar from "./navbar";
import ExpCard from "./exp-comp/exp-card";
import reactLogo from "../assets/images/react.svg";
import pythonLogo from "../assets/images/pythonlogo.jpg";
import seleniumLogo from "../assets/images/selenium-logo.png";
import javascriptLogo from "../assets/images/javascriptlogo.png";
import consthat from "../assets/images/consthat.jpg";
const Exp = () => {
  const rivnLogo = "https://static.rivn.com/images/rivn_blue_background.svg";

  return (
    <div className="exp main">
      <NavBar />
      <div className="exp-content">
        <ExpCard
          name="RIVN Database Interface"
          logo={rivnLogo}
          programs={[pythonLogo, javascriptLogo, reactLogo]}
          desc="The RIVN Database Interface is a frontend interface coded in React.js for internal use within RIVN. Its purpose was to make database entries possible by all members of the team, not just developers who knew SQL. The frontend uses RESTful routing to hit the API and display information in the database, edit information, delete information, and create new database entries.
          The backend API was coded using Python Flask. It also utilizes SQLAlchemy and Flask-SQLAlchemy to interact with a Microsoft Azure MySQL Database. 
          "
        />
        <ExpCard
          name="RIVN Scan"
          logo={rivnLogo}
          programs={[pythonLogo, seleniumLogo]}
          desc="RIVN Scan is a program I engineered to check on a predetermined basis whether or not RIVN Customers were meeting guidelines set out in the GDPR and CCPA. This program used Python Selenium and BeautifulSoup4 to go and retrieve the HTML of the customers page, then scan through and search for certain HTML elements that would indicate the presence of both a Privacy Policy link, and a Cookie Consent Banner."
        />
        <ExpCard
          name="RIVN Screenshot"
          logo={rivnLogo}
          programs={[pythonLogo, seleniumLogo]}
          desc="RIVN Screenshot is a branch of the RIVN Scan tool. The Screenshot tool also utilized Python Selenium to go to a customers website and take a screenshot of the page upon loading. This was used alongside RIVN Scrape to show CCPA and GDPR compliance."
        />
        <ExpCard
          name="CNS Contractors Invoice Creator"
          logo={consthat}
          programs={[pythonLogo]}
          desc="The Invoice Creator was a program I engineered for CNS Contractors to provide a much more streamlined way to create Invoices. This program will take only 5 inputs, then create a Microsoft Word Document based upon those 5 inputs and a template to create a whole invoice of services. Prior to this software, the company would spend almost 10 minutes per invoice. It now only takes 30 seconds."
        />
      </div>
    </div>
  );
};
export default Exp;
