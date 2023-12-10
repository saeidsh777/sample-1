import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
            <div>
              <Link to="/" className="footer-logo">
                J<span className="footer-logo-select">o</span>B
              </Link>
              <small className="white-50-t d-block mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                culpa quaerat aliquid, nobis in odio eum ducimus porro
                distinctio voluptatum.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
