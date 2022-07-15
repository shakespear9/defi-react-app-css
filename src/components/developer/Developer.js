import React from "react";
import style from "./Developer.module.css";
import Terminal from "../../assets/terminal.png";

const Developer = () => {
  return (
    <div className={style.developers}>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Superpower for DEFI developers.</h2>
          <p>
            Checkout the <span className="blue">documentation </span>, the{" "}
            <span className="blue">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className={style.right}>
          <div className={style["img-container"]}>
            <img src={Terminal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
