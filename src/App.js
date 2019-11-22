import React from "react";
import { BrowserRouter as BR, Route, Switch } from "react-router-dom";

import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";
import NavBar from "./components/navbar";
import MailerModal from "./components/pages/mailer-modal";

import "./assets/main.scss";
function App() {
  const [show, setShow] = React.useState(false);

  const showModal = checker => {
    if (checker) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div className="App">
      <BR>
        <NavBar checker={showModal} />
        {show === true ? <MailerModal checker={showModal} /> : null}
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
