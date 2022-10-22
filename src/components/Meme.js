import React, { useState } from "react";

import classes from "./Meme.module.css";
import memesData from "../memesData";

const Meme = (props) => {
  let url;
  const [memeUrl, setMemeUrl] = useState("");

  const getRandomMeme = (meme) => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    setMemeUrl(url);
  };

  return (
    <main className={classes.main}>
      <div className={classes.form}>
        <input className={classes.input} type="text"></input>
        <input className={classes.input} type="text"></input>
        <button onClick={getRandomMeme} className={classes.btn}>
          Get a new meme image 🖼
        </button>
      </div>
      <div>
        <img className={classes.meme} src={memeUrl} alt="random-meme" />
      </div>
    </main>
  );
};

export default Meme;
