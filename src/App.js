import React from "react";
import { BrowserRouter as BR, Route, Switch } from "react-router-dom";

import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";
import NavBar from "./components/navbar";

import "./assets/main.scss";
function App() {
  return (
    <div className="App">
      <BR>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BR>
    </div>
  );
}

export default App;
