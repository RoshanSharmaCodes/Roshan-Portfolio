import { useState } from "react";
import "./Gallery.css";
import data from "../../Data/WorkData.jsx";
import PhotoCard from "../PhotoCard/PhotoCard";
import { useEffect } from "react";

const Gallery = () => {
  var [counter, setCounter] = useState(1);
  var [mobile, setMobile] = useState(false);
  var maxLen = data.length;
  var minLen = 1;
  const incCounter = () => {

    if (counter < maxLen) {
      setCounter(++counter);
    }
  };

  const decCounter = () => {
    if (counter > 1) {
      setCounter(--counter);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 713) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 713) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);

  return (
    <>
      <div className="galleryContainer">
        <div className=" galleryMain reveal">
          {mobile==true ? (
            <></>
          ) : (
            <img
              src="./Assets/prevCircle.svg"
              className={counter > 1 ? "naviIcon" : "naviIcon"}
              onClick={()=>decCounter()}
              alt="prev"
            />
          )}

          {data
            .filter((val) => {
              return val.index == counter;
            })
            .map((res) => {
              return (
                <PhotoCard
                  counter={counter}
                  title={res.title}
                  desc={res.desc}
                  image={res.image}
                />
              );
            })}
          {mobile==true ? (
            <></>
          ) : (
            <img
              src="./Assets/nextCircle.svg"
              className={counter > 1 ? "naviIcon" : "naviIcon"}
              onClick={()=>incCounter()}
              alt="prev"
            />
          )}
        </div>

        <div className={mobile ? "mobileController" : "hidden"}>
          <img
            src="./Assets/prevCircle.svg"
            className="naviIcon"
            onClick={decCounter}
            alt="prev"
          />
          <img
            src="./Assets/nextCircle.svg"
            className="naviIcon"
            onClick={incCounter}
            on
            alt="next"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
