import React from "react";
import "../styles/Malacounter.css";

export default function Malacounter({ count }) {
  return (
    <div id="malaCounter">
      <p>{count < 9 ? "0" + count.toString() : count.toString()}</p>
    </div>
  );
}
