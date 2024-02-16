import React from "react";
import "../styles/Malacounter.css";

export default function Malacounter({ count }) {
  return (
    <div id="malaCounter">
      <p>{count}</p>
    </div>
  );
}
