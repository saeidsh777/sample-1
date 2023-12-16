import React from 'react'
import './AboutCompany.css'
import { BriefcaseFill, PatchCheckFill, PeopleFill, PersonFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
export default function AboutCompany(props) {
  return (
    <div className="about-company white-b">
      <span className="valid-company d-flex align-items-center gap-2">
        <PatchCheckFill className="green-t" />
        <span className="valid-title">Verified Company</span>
      </span>

      <div className="d-flex gap-3 align-items-center mt-3">
        <div className="logo-box-img">
          <img src={props.logo} alt="company logo" />
        </div>
        <div className="title-job-box">
          <small className="black-50-t">{props.location}</small>
          <span className="h5 fw-bold m-0 d-block">
            {props.jobTitle}
          </span>
        </div>
      </div>

      <hr className="w-100" />

      <ul>
        <li className="d-flex align-items-center gap-2 mb-2">
          <PeopleFill className="green-t" />
          <p className="black-50-t m-0">Size: 1,001 - 5,000 employees</p>
        </li>
        <li className="d-flex align-items-center gap-2 mb-2">
          <PersonFill className="green-t" />
          <p className="black-50-t m-0">Any Experience Welcomed</p>
        </li>
        <li className="d-flex align-items-center gap-2">
          <BriefcaseFill className="green-t" />
          <p className="black-50-t m-0">Industry: Healthcare, Insurance</p>
        </li>
      </ul>
    </div>
  );
}
