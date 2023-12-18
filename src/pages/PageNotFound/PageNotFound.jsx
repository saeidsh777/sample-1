import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {CupHot} from "react-bootstrap-icons";

import "./PageNotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <Header />
      <section className="page-not-found d-flex align-items-center position-relative">
        <div className="bg-cover-white-color"></div>
        <div className="container position-relative">
          <div className="row justify-content-center ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-4">
              <div className="not-found-container white-b">
                <div className="text-center mb-4">
                  <CupHot className="fs-1" />
                </div>
                <span className="h1 green-t fw-bold d-block text-center">
                  404
                </span>
                <span className="h2 fw-bold d-block text-center">
                  Page not found!
                </span>
                <p className="black-50-t text-center">
                  Sorry, it appears that the page youre trying to find has gone
                  on a coffee break.
                </p>
                <Link to="/" className="btn-c1 m-auto d-block">
                  BACK HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
