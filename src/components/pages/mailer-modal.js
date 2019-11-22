import React from "react";
import axios from "axios";
import { send } from "q";

const MailerModal = props => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [comp, setComp] = React.useState("");
  const [misc, setMisc] = React.useState("");
  const [showSent, setShowSent] = React.useState("");
  const sendEmail = e => {
    e.preventDefault();
    axios
      .post("https://ethon-willes-port-api.herokuapp.com/send-email", {
        email: email,
        name: name,
        comp: comp,
        misc: misc
      })
      .then(res => res)
      .then(data => {
        setShowSent(data.data.EMAIL_SENT);
        console.log(data);
      });
    setTimeout(() => {
      closer();
    }, 3000);
  };
  const closer = () => {
    props.checker(false);
  };
  return (
    <div className="mailer">
      <div className="close" onClick={closer}>
        X
      </div>
      <h1>Email Me!</h1>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Enter Email Address"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Name"
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Name of Company"
          onChange={e => setComp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter any Additional Information"
          onChange={e => setMisc(e.target.value)}
        />
        {showSent === true ? <p>Email Sent!</p> : null}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default MailerModal;
