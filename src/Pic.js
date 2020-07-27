import React from "react";
import "./Pic.css";

function Pic(props) {
  const imgUrl = props.imgUrl;
  const alt = props.alt;
  return (
    <div className="Pic">
      <img className="Img" src={imgUrl} alt={alt}></img>
    </div>
  );
}

export default Pic;
