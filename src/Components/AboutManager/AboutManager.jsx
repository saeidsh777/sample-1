import React from 'react'
import SocialIcon from "../../Components/SocialIcon/SocialIcon";

import './AboutManager.css'

export default function AboutManager({ srcImg }) {
  return (
    <div className="d-flex flex-column align-items-center about-manager green-b">
      <div className="manager-img-box">
        <img className="manager-img" src={srcImg} alt="" />
      </div>

      <div className="manager-about-body d-flex flex-column mt-3">
        <h5 className="fw-bold text-center white-t">Louis Gallagher</h5>
        <small className=" text-center white-t text-center d-block">
          Louis Gallagher
        </small>
        <div className="d-flex justify-content-center mt-1">
          <SocialIcon iconW />
        </div>
      </div>
    </div>
  );
}
