import picturesData from "../picturesData";

import "../styles/Homepage.css";

import Malacounter from "../components/Malacounter";
import Chantcounter from "../components/Chantcounter";
import Prabhupictures from "../components/Prabhupictures";

import React, { useState, useEffect } from "react";
import Quotes from "../components/Quotes";

export default function Homepage() {
  const [randomIndex, setRandomIndex] = useState(0);
  const [malaCount, setMalaCount] = useState("00");

  const handleMalaCount = (chantCount) => {
    if (chantCount === "0107") {
      setMalaCount((prevMalaCount) => {
        let newMalaCount = parseInt(prevMalaCount) + 1;
        return newMalaCount.toString().padStart(2, "0");
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomIndex(Math.floor(Math.random() * picturesData.length));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Quotes
        quote={
          "Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare"
        }
      />
      <Prabhupictures
        imgSource={picturesData[randomIndex].imgSrc}
        imgAlt={picturesData[randomIndex].imgAlt}
      />
      <div id="counterContainer">
        <Malacounter count={malaCount} />
        <Chantcounter onChantCount={handleMalaCount} />
      </div>
    </>
  );
}
