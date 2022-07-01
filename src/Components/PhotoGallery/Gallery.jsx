import { useState } from "react";
import "./Gallery.css";
import PhotoCard from "../PhotoCard/PhotoCard";

const Gallery = () => {
  var [counter, setCounter] = useState(1)

  const incCounter = () => {
    setCounter(++counter)
  };

  const decCounter = () => {
    setCounter(--counter)
  };
  return (
    <>
      <div className="galleryContainer">
        <img src="./Assets/prevGreen.svg" className="naviIcon" onClick={decCounter} alt="prev" />
        <PhotoCard counter={counter} />
        <img src="./Assets/nextGreen.svg" className="naviIcon" onClick={incCounter} on alt="next" />
      </div>
    </>
  );
};

export default Gallery;
