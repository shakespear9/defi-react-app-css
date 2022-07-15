import React from "react";
import style from "./About.module.css";

const AboutCard = (props) => {
  return (
    <>
      <div className={style["icon-container"]}>{props.icon}</div>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </>
  );
};

export default AboutCard;
