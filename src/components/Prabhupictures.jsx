import "../styles/Prabhupictures.css";

export default function Prabhupictures({ imgSource, imgAlt }) {
  return (
    <>
      <img id="prabhuPictures" src={imgSource} alt={imgAlt} />
    </>
  );
}
