import React from "react";
import "./ImgTemplate.css";

export default function ImgTemplate({ srcImg, labelImg }) {
  return (
    <div className="container-experience">
      <img className="masking-img" src={srcImg} alt="" />
      {labelImg && (
        <div className="experience-label white-b">
          <span className="green-t">15+</span>
          <p className="text-center">YEARS OF EXPERIENCE</p>
        </div>
      )}
    </div>
  );
}
