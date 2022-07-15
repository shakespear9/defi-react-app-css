import React from "react";
import style from "./Hero.module.css";
import MainVideo from "../../assets/video.mp4";

const Hero = () => {
  return (
    <div className={style.hero}>
      <video autoPlay loop muted className={style.video}>
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className={style["hero-text"]}>
        <h1>Decentralized</h1>
        <h1>
          <span className="blue">Trading</span> Protocol
        </h1>
        <p>
          Guarunteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div className="btn-group">
          <button className={`btn ${style.btn}`}>Use DeFi</button>
          {/* <button className="btn btn-outline">Documentation</button> */}
          <button className={`btn ${style.btn} btn-outline`}>FAQ</button>
        </div>
      </div>
      <div className={style["bottom-text"]}>
        <h2>Total Volume Secured: </h2>
        <h2>$12,345,123,879.22</h2>
      </div>
    </div>
  );
};

export default Hero;
