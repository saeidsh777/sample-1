import React from "react";
import { Link } from "react-router-dom";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Envelope } from "react-bootstrap-icons";

import "./Footer.css";
import Ltpb from "../Ptpb/Ltpb";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container footer-header g-0">
        <div className="footer-header-body position-relative">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <span className="h1 fw-bold d-block mb-4 text-center text-lg-start">
                Frequently Ask Question.
              </span>
              <p className="black-50-t text-center text-lg-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="btn-c1 m-auto m-lg-0 w-100 w-lg-auto">
                DISCOVER MORE
              </button>
            </div>
            <div className="col-12 col-lg-6">
              <img
                className="img-footer"
                src="/images/img-footer.png"
                alt="img-footer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-body">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="me-md-5">
              <Link
                to="/"
                className="footer-logo text-center text-md-start d-block"
              >
                J<span className="footer-logo-select">o</span>B
              </Link>
              <small className="white-50-t d-block mb-4 text-center text-md-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                culpa quaerat aliquid, nobis in odio eum ducimus porro
                distinctio voluptatum.
              </small>
              <div className="d-flex justify-content-center justify-content-md-start">
                <SocialIcon />
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2 mt-5 mt-md-0">
            <h5 className="fw-bold white-t">Categories</h5>
            <nav>
              <ul>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Full Time</small>
                  </Link>
                </li>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Part Time </small>
                  </Link>
                </li>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Freelance</small>
                  </Link>
                </li>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Internship</small>
                  </Link>
                </li>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Work From Home</small>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-6 col-md-3 col-lg-2 mt-5 mt-md-0">
            <h5 className="fw-bold white-t">Company</h5>
            <nav>
              <ul>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>About us</small>
                  </Link>
                </li>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Leadership</small>
                  </Link>
                </li>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Careers</small>
                  </Link>
                </li>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>News & Article</small>
                  </Link>
                </li>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Legal Notice</small>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-12 col-lg-4 mt-5 mt-lg-0">
            <div>
              <h5 className="fw-bold white-t text-center text-md-start">
                Newsletter
              </h5>
              <small className="white-50-t d-block mb-4 text-center text-md-start">
                Get exclusive deals by signing up to our Newsletter.
              </small>
              <input type="email" className="email-user" placeholder="Email" />
              <button className="btn-c1 w-100 d-flex gap-1 align-items-center justify-content-center">
                <Envelope className="fs-5" /> SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <hr className="w-100 white-t" />
      </div>

      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <small className="white-t d-block text-center text-lg-start">
              Copyright © 2023 Job, All rights reserved. Developer
              <span className="green-t"> Saeid-Shojaei.</span>
            </small>
          </div>
          <div className="col-12 col-lg-6">
            <nav>
              <ul className="d-flex justify-content-center justify-content-lg-end align-items-center back-link">
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Term of use</small>
                  </Link>
                </li>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Privacy policy</small>
                  </Link>
                </li>
                <li>
                  <Link className="white-t footer-link-item" to="/">
                    <small>Cookie policy</small>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
