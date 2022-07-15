import React from "react";
import style from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuToggle, setIsMenuToggle] = React.useState(false);

  const handleMenuClick = () => {
    console.log("abced");
    setIsMenuToggle(!isMenuToggle);
  };

  return (
    <div className={style.navbar}>
      <div className={style.container}>
        <h1 style={{ marginLeft: "1rem", color: "#00d8ff" }}>Defi</h1>
        <ul className={`${style.nav} ${isMenuToggle && style.active}`}>
          <li className={style.navitem}>
            <a href="/">Platform</a>
          </li>
          <li className={style.navitem}>
            <a href="/">Developers</a>
          </li>
          <li className={style.navitem}>
            <a href="/">Community</a>
          </li>
          <li className={style.navitem}>
            <a href="/">About</a>
          </li>
          <li className={style.navitem}>
            <a className="btn" href="/">
              Use Defi
            </a>
          </li>
        </ul>
        <div className={style.hamburgur}>
          {isMenuToggle ? (
            <AiOutlineClose className={style.icon} onClick={handleMenuClick} />
          ) : (
            <AiOutlineMenu className={style.icon} onClick={handleMenuClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
