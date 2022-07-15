import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.col}>
          <h4>Products</h4>
          <p>App</p>
          <p>Analytics</p>
          <p>Token Lists</p>
          <p>DeFi</p>
        </div>
        <div className={style.col}>
          <h4>Developers</h4>
          <p>Documentation</p>
          <p>GitHub</p>
          <p>Whitepaper</p>
          <p>Bug Bounty</p>
        </div>
        <div className={style.col}>
          <h4>Governance</h4>
          <p>Forum</p>
          <p>Documentation</p>
          <p>Policies</p>
          <p>Terms</p>
        </div>
        <div className={style.col}>
          <h4>Community</h4>
          <p>Discord</p>
          <p>Twitter</p>
          <p>Reddit</p>
        </div>
        <div className={style.col}>
          <h4>About</h4>
          <p>Blog</p>
          <p>Info</p>
          <p>FAQ</p>
          <p>Jobs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
