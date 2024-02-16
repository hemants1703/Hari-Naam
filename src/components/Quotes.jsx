import "../styles/Quotes.css";

export default function Quotes({ quote }) {
  return (
    <div id="quotesContainer">
      <p>{quote}</p>
    </div>
  );
}
