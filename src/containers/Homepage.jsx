import picturesData from "../picturesData.json";

import "../styles/Homepage.css";

import Malacounter from "../components/Malacounter";
import Chantcounter from "../components/Chantcounter";
import Prabhupictures from "../components/Prabhupictures";

import { useState, useEffect } from "react";
import Quotes from "../components/Quotes";

export default function Homepage() {
  const [randomIndex, setRandomIndex] = useState(0);
  const [malaCount, setMalaCount] = useState(0);

  const handleMalaCount = () => {
    console.log("108 chants completed!");
    setMalaCount((prevMalaCount) => {
      let newMalaCount = prevMalaCount + 1;
      return newMalaCount;
    });
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
        <Chantcounter handleMalaCount={handleMalaCount} />
      </div>
    </>
  );
}
