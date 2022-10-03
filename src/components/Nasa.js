import React from "react";

const NasaImage = (props) => {
  return (
    <div className="wrapper">
      <h3>{props.nasaImg.title}</h3>
      <p>{props.nasaImg.date}</p>
      <img src={props.nasaImg.hdurl}></img>
      <p className="explanation">{props.nasaImg.explanation}</p>
    </div>
  );
};

export default NasaImage;
