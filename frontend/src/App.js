import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import ImageCard from "./components/ImageCard.js";

const UNSPASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  console.log(images);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  return (
    <div>
      <Header title="Images Gallery 2" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <ImageCard />
    </div>
  );
};

export default App;
