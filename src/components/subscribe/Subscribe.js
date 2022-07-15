import React from "react";
import style from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={style.subscribe}>
      <div className={style.content}>
        <h2>Join Our DeFi Community</h2>
        <form action="sendToGetForm.IO" method="POST">
          <div className={`${style["form-container"]} ${style["display-col"]}`}>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
            />
            <button className="btn">Sign Up</button>
          </div>
          <div className={style["form-container"]}>
            <input type="checkbox" />
            <p>Yes, I agree to receive email communications from DeFi.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
