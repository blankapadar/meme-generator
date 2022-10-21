import React from "react";

import classes from "./Meme.module.css";

const Meme = (props) => {
  return (
    <main>
      <form>
        <input className={classes.input} type="text"></input>
        <input className={classes.input} type="text"></input>
        <button className={classes.btn}>Get a new meme image 🖼</button>
      </form>
    </main>
  );
};

export default Meme;
