import { useState, useEffect } from "react";
import "../styles/Chantcounter.css";

export default function Chantcounter({ handleMalaCount }) {
  const [chantCount, setChantCount] = useState("0107");

  useEffect(() => {
    if (chantCount === "0108") {
      handleMalaCount(chantCount);
    }
  }, [chantCount]);

  const updateChantCount = () => {
    setChantCount((prevCount) => {
      let newCount = parseInt(prevCount) + 1;
      if (newCount === 108) {
        handleMalaCount(newCount.toString().padStart(4, "0"));
        newCount = 0;
      }
      return newCount.toString().padStart(4, "0");
    });
  };

  return (
    <button id="chantCounter" onClick={updateChantCount}>
      {chantCount}
    </button>
  );
}
