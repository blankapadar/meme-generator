import React, { useState } from "react";

import classes from "./Meme.module.css";
import memesData from "../memesData";

const Meme = (props) => {
  let url;

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getRandomMeme = (meme) => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
        <img
          className={classes.meme}
          src={meme.randomImage}
          alt="random-meme"
        />
      </div>
    </main>
  );
};

export default Meme;
