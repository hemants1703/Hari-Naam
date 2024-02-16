import { useState, useEffect } from "react";
import "../styles/Chantcounter.css";

export default function Chantcounter({ handleMalaCount }) {
  const [chantCount, setChantCount] = useState(0);

  useEffect(() => {
    if (chantCount === 108) {
      handleMalaCount();
      setChantCount(0);
    }
  }, [chantCount, handleMalaCount]);

  const updateChantCount = () => {
    setChantCount((prevCount) => prevCount + 1);
  };

  return (
    <button id="chantCounter" onClick={updateChantCount}>
      {chantCount}
    </button>
  );
}
