import React from "react";
import { PatchCheckFill } from "react-bootstrap-icons";
import { StopwatchFill } from "react-bootstrap-icons";
import { Coin } from "react-bootstrap-icons";

import "./JobBox.css";
import { Link } from "react-router-dom";

export default function JobBox(props) {
  return (
    <div className="JobBox">
      <span className="valid-company d-flex align-items-center gap-2">
        <PatchCheckFill className="green-t" />
        <span className="valid-title">Verified Company</span>
      </span>

      <div className="job-header d-flex gap-3 align-items-center mt-3">
        <div className="logo-box-img">
          <img src={props.logo} alt="company logo" />
        </div>
        <div className="title-job-box">
          <small className="black-50-t">{props.location}</small>
          <Link to={`/job/${props.jobID}`} className="h5 fw-bold m-0 d-block">
            {props.jobTitle}
          </Link>
        </div>
      </div>

      <hr className="w-100" />

      <div className="job-body">
        <h4>{props.titleBody}</h4>
        <p className="black-50-t">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="job-footer mt-5">
        <div className="row">
          <div className="col-12 col-xl-6">
            <div className="d-flex align-items-center gap-1">
              <StopwatchFill className="green-t fs-5" />
              <p className="black-50-t m-0">Full Time</p>
            </div>
            <div className="d-flex align-items-center gap-1 mt-2">
              <Coin className="green-t fs-5" />
              <p className="black-50-t m-0">$20k - $25k</p>
            </div>
          </div>

          <div className="col-12 col-xl-6 mt-2 mt-xl-0 d-flex align-items-center justify-content-xl-end">
            <Link to={`/job/${props.jobID}`} className="btn-c1 d-block ">
              Job Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
