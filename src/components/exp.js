import React from "react";
import NavBar from "./navbar";

import CompExp from "./exp-comp/comp-exp";
import Projects from "./exp-comp/projects";
const Exp = () => {
  const [check, setCheck] = React.useState(true);
  return (
    <div
      className="exp main"
      style={check ? { height: "100vh" } : { height: "auto" }}
    >
      <NavBar />
      <div className="exp-content">
        <div className="button-div">
          <button
            onClick={() => {
              setCheck(true);
            }}
            style={
              check ? { backgroundColor: "#393e41" } : null
            }
          >
            Experience
          </button>
          <button
            onClick={() => {
              setCheck(false);
            }}
            style={
              check === false
                ? { backgroundColor: "#393e41" }
                : null
            }
          >
            Projects
          </button>
        </div>
        {check ? <CompExp /> : <Projects />}
      </div>
    </div>
  );
};
export default Exp;
