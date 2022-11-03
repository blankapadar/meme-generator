import React, { useState } from "react";

import classes from "./Meme.module.css";
import memesData from "../memesData";

const Meme = (props) => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getRandomMeme = (meme) => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const changeHandler = (event) => {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <main className={classes.main}>
      <div className={classes.form}>
        <input
          className={classes.input}
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={changeHandler}
        ></input>
        <input
          className={classes.input}
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={changeHandler}
        ></input>
        <button onClick={getRandomMeme} className={classes.btn}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className={classes.memes}>
        <img
          className={classes.meme}
          src={meme.randomImage}
          alt="random-meme"
        />
        <h2 className={classes.top}>{meme.topText}</h2>
        <h2 className={classes.bottom}>{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
