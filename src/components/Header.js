import React from "react";
import meme from "../images/meme.png";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.meme} src={meme} alt="meme" />
      <h3>Meme Generator</h3>
    </header>
  );
};

export default Header;
