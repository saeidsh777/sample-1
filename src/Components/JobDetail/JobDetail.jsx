import React from "react";
import {
  CheckCircleFill,
  CurrencyDollar,
  GeoAltFill,
} from "react-bootstrap-icons";

import "./JobDetail.css";
import { ScrollRestoration } from "react-router-dom";

export default function JobDetail(props) {
  console.log(props);
  return (
    <div className="jobDetail white-b">
      <span className="valid-company d-flex align-items-center gap-2">
        <span className="valid-title green-t">Full Time</span>
      </span>

      <div className="row">
        <div className="col-12 col-lg-6  mt-3">
          <span className="fw-bold h3">{props.titleBody}</span>
          <div className="d-flex align-items-center gap-3 mt-2">
            <div className="d-flex align-items-center gap-1">
              <GeoAltFill className="green-t" />
              <small className="black-50-t">{props.location}</small>
            </div>
            <div className="d-flex align-items-center gap-1">
              <CurrencyDollar className="green-t" />
              <small className="black-50-t">{props.price}</small>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 d-flex justify-content-lg-end align-items-center mt-3 mt-lg-0">
          <button className="btn-c1 w-100 w-lg-auto">APLLAY NOW</button>
        </div>
      </div>

      <hr className="w-100" />

      <div className="job-body">
        <div className="mb-5">
          <h5 className="fw-bold mb-3">Job Description:</h5>
          <p className="black-50-t">{props.discriptionBody}</p>
        </div>

        <div className="mb-5">
          <h5 className="fw-bold mb-3">Duties & Responsibilities:</h5>
          <ul className="black-50-t">
            <li className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center justify-content-center">
                <CheckCircleFill className="green-t" />
              </div>
              <p className="black-50-t m-0">
                Arcu ac penatibus class id at inceptos
              </p>
            </li>
            <li className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center justify-content-center">
                <CheckCircleFill className="green-t" />
              </div>{" "}
              <p className="black-50-t m-0">
                Massa lectus maecenas dignissim quam auctor
              </p>
            </li>
            <li className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center justify-content-center">
                <CheckCircleFill className="green-t" />
              </div>{" "}
              <p className="black-50-t m-0">
                Nulla felis auctor litora amet lorem
              </p>
            </li>
            <li className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center justify-content-center">
                <CheckCircleFill className="green-t" />
              </div>{" "}
              <p className="black-50-t m-0">Porta blandit aenean a amet</p>
            </li>
            <li className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center justify-content-center">
                <CheckCircleFill className="green-t" />
              </div>{" "}
              <p className="black-50-t m-0">
                Congue bibendum a suspendisse massa
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <h5 className="fw-bold mb-3">Duties & Responsibilities:</h5>
          <ul className="black-50-t">
            <li className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center justify-content-center">
                <CheckCircleFill className="green-t" />
              </div>
              <p className="black-50-t m-0">
                Arcu ac penatibus class id at inceptos
              </p>
            </li>
            <li className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center justify-content-center">
                <CheckCircleFill className="green-t" />
              </div>{" "}
              <p className="black-50-t m-0">
                Massa lectus maecenas dignissim quam auctor
              </p>
            </li>
            <li className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center justify-content-center">
                <CheckCircleFill className="green-t" />
              </div>{" "}
              <p className="black-50-t m-0">
                Nulla felis auctor litora amet lorem
              </p>
            </li>
            <li className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center justify-content-center">
                <CheckCircleFill className="green-t" />
              </div>{" "}
              <p className="black-50-t m-0">Porta blandit aenean a amet</p>
            </li>
            <li className="d-flex align-items-center gap-2 mb-2">
              <div className="d-flex align-items-center justify-content-center">
                <CheckCircleFill className="green-t" />
              </div>{" "}
              <p className="black-50-t m-0">
                Congue bibendum a suspendisse massa
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
