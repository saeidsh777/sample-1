import React from "react";
import Header from "../../Components/Header/Header";
import { Mortarboard } from "react-bootstrap-icons";


import "./Home.css";

export default function Home() {
  return (
    <>
      <Header>
        <section className="header-banner-home">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 d-flex flex-column gap-3 order-last order-lg-first mt-5 mt-lg-0">
                <p className="green-t text-center text-lg-start m-0">
                  LETS START YOUR CAREERS HERE!
                </p>
                <h1 className="fw-bold text-center text-lg-start m-0">
                  Looking for a career change? Browse our job listings now!
                </h1>
                <p className="text-center text-lg-start black-50-t">
                  Mus vehicula dignissim quis si lorem libero cras pulvinar orci
                  dapibus. Sagittis quisque orci pretium donec elit platea porta
                  integer maecenas risus lobortis.
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start align-items-center gap-4">
                  <div className="d-flex">
                    <div className="freelancer-img-box">
                      <img
                        className="freelancer-img"
                        src="/images/freelancer.jpg"
                        alt="freelancer"
                      />
                    </div>
                    <div className="freelancer-img-box">
                      <img
                        className="freelancer-img"
                        src="/images/freelancer2.jpg"
                        alt="freelancer"
                      />
                    </div>
                    <div className="freelancer-img-box">
                      <img
                        className="freelancer-img"
                        src="/images/freelancer3.jpg"
                        alt="freelancer"
                      />
                    </div>
                    <div className="freelancer-img-box">
                      <img
                        className="freelancer-img"
                        src="/images/freelancer4.jpg"
                        alt="freelancer"
                      />
                    </div>
                    <div className="freelancer-img-box">
                      <img
                        className="freelancer-img"
                        src="/images/freelancer5.jpg"
                        alt="freelancer"
                      />
                    </div>
                  </div>
                  <h5 className="m-0 fw-bold">540 K+ Member Active</h5>
                </div>
                <button className="btn-c1 m-auto m-lg-0 w-100 w-lg-auto">
                  BROWSE JOB
                </button>
              </div>
              <div className="col-12 col-lg-6 order-first order-lg-last">
                <div className="banner-img-box">
                  <img
                    className="banner-img"
                    src="/images/img_frame.png"
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Header>

      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-4 position-relative">
              <div className="services-box d-flex flex-column justify-content-center align-items-center gap-2 white-b">
                <Mortarboard className="text-center icon-services green-t" />
                <h5 className="text-center fw-bold">Talents Agency</h5>
                <p className="black-50-t text-center">
                  Facilisi etiam consectetur mi nibh bibendum posuere ultricies
                  cubilia donec potenti si
                </p>
              </div>
            </div>
            <div className="col-4 position-relative">
              <div className="services-box d-flex flex-column justify-content-center align-items-center gap-2 green-b">
                <Mortarboard className="text-center icon-services white-t" />
                <h5 className="text-center fw-bold white-t">Portal Job</h5>
                <p className="white-t text-center">
                  Facilisi etiam consectetur mi nibh bibendum posuere ultricies
                  cubilia donec potenti si
                </p>
              </div>
            </div>
            <div className="col-4 position-relative">
              <div className="services-box d-flex flex-column justify-content-center align-items-center gap-2 white-b">
                <Mortarboard className="text-center icon-services green-t" />
                <h5 className="text-center fw-bold">Careers Coaching</h5>
                <p className="black-50-t text-center">
                  Facilisi etiam consectetur mi nibh bibendum posuere ultricies
                  cubilia donec potenti si
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
