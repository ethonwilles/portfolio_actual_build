import React from "react";

const ExpCard = (props) => {
  const [programs, setPrograms] = React.useState(props.programs);
  const RenderPrograms = () => {
    return programs.map((elem) => {
      return <img src={elem} alt="badlogo" />;
    });
  };
  return (
    <div className="exp-card">
      <img classname="comp-logo" src={props.logo} alt="comp logo" />
      <h1>{props.name}</h1>
      <div className="programs">
        {programs === false ? null : RenderPrograms()}{" "}
      </div>

      <p>{props.desc}</p>
    </div>
  );
};
export default ExpCard;
