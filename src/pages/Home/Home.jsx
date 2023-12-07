import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { Mortarboard } from "react-bootstrap-icons";
import JobBox from "../../Components/JobBox/JobBox";
import jobDatas from "../../data/jobData";
import AOS from "aos";
import CountUp from "react-countup";

import "aos/dist/aos.css";
import "./Home.css";

export default function Home() {
  const [jobData, setJobData] = useState(jobDatas);

  AOS.init();
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <>
      <Header>
        <section className="header-banner-home">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-12 col-lg-6 d-flex flex-column gap-3 order-last order-lg-first mt-5 mt-lg-0"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
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

              <div
                className="col-12 col-lg-6 order-first order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
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

      <main>
        <section className="services">
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-lg-4 position-relative"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="services-box d-flex flex-column justify-content-center align-items-center gap-2 white-b">
                  <Mortarboard className="text-center icon-services green-t" />
                  <h5 className="text-center fw-bold">Talents Agency</h5>
                  <p className="black-50-t text-center">
                    Facilisi etiam consectetur mi nibh bibendum posuere
                    ultricies cubilia donec potenti si
                  </p>
                </div>
              </div>

              <div
                className="mt-3 mt-lg-0 col-12 col-lg-4 position-relative"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="services-box d-flex flex-column justify-content-center align-items-center gap-2 green-b">
                  <Mortarboard className="text-center icon-services white-t" />
                  <h5 className="text-center fw-bold white-t">Portal Job</h5>
                  <p className="white-t text-center">
                    Facilisi etiam consectetur mi nibh bibendum posuere
                    ultricies cubilia donec potenti si
                  </p>
                </div>
              </div>

              <div
                className="mt-3 mt-lg-0 col-12 col-lg-4 position-relative"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="services-box d-flex flex-column justify-content-center align-items-center gap-2 white-b">
                  <Mortarboard className="text-center icon-services green-t" />
                  <h5 className="text-center fw-bold">Careers Coaching</h5>
                  <p className="black-50-t text-center">
                    Facilisi etiam consectetur mi nibh bibendum posuere
                    ultricies cubilia donec potenti si
                  </p>
                </div>
              </div>
            </div>

            <div className="row services-bottom align-items-center">
              <div
                className="col-12 col-lg-6"
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="container-experience">
                  <img
                    className="masking-img"
                    src="/images/image-woman.jpg"
                    alt=""
                  />
                  <div className="experience-label white-b">
                    <span className="green-t">15+</span>
                    <p className="text-center">YEARS OF EXPERIENCE</p>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-lg-6 mt-5 mt-lg-0"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="d-flex flex-column gap-3 ps-5">
                  <p className="green-t m-0">OUR SERVICE</p>
                  <span className="fw-bold m-0 h1">
                    Bridge for industrial and corporate development.
                  </span>
                  <p className="black-50-t">
                    Donec class lacinia vel hac laoreet amet et dictumst
                    suspendisse. Maximus tortor pede egestas quis facilisis est.
                    Neque dis fringilla augue mollis viverra enim conubia
                    pulvinar.
                  </p>
                  <button className="btn-c1">DISCOVER MORE</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="latest-job">
          <div className="container">
            <div className="row">
              <span className="h1 text-center fw-bold d-block mb-4">
                Latest Job Listing
              </span>

              {jobData.map((jobItem, index) => (
                <div
                  key={index}
                  className="col-12 col-lg-4 mb-4"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-bottom"
                >
                  <JobBox {...jobItem} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="featured-company d-flex align-items-center white-50-b">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 order-1 order-lg-0 mt-5 mt-lg-0">
                <div className="row">
                  <div className="col-6 col-md-4 gx-1">
                    <div className="white-b featured-company-img-box">
                      <img src="/images/velocity-1.png" alt="velocity" />
                    </div>
                  </div>
                  <div className="col-6 col-md-4 gx-1">
                    <div className="white-b featured-company-img-box">
                      <img src="/images/vector-2.png" alt="velocity" />
                    </div>
                  </div>
                  <div className="col-6 col-md-4 gx-1">
                    <div className="white-b featured-company-img-box">
                      <img src="/images/vector-3.png" alt="velocity" />
                    </div>
                  </div>
                  <div className="col-6 col-md-4 gx-1">
                    <div className="white-b featured-company-img-box">
                      <img src="/images/vector-4.png" alt="velocity" />
                    </div>
                  </div>
                  <div className="col-6 col-md-4 gx-1">
                    <div className="white-b featured-company-img-box">
                      <img src="/images/vector-5.png" alt="velocity" />
                    </div>
                  </div>
                  <div className="col-6 col-md-4 gx-1">
                    <div className="white-b featured-company-img-box">
                      <img src="/images/vector-6.png" alt="velocity" />
                    </div>
                  </div>
                  <div className="col-6 col-md-4 gx-1">
                    <div className="white-b featured-company-img-box">
                      <img src="/images/vector-7.png" alt="velocity" />
                    </div>
                  </div>
                  <div className="col-6 col-md-4 gx-1">
                    <div className="white-b featured-company-img-box">
                      <img src="/images/vector-8.png" alt="velocity" />
                    </div>
                  </div>
                  <div className="col-6 col-md-4 gx-1">
                    <div className="white-b featured-company-img-box">
                      <img src="/images/vector-9.png" alt="velocity" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-lg-6 mt-5 mt-lg-0 order-0 order-lg-1"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="d-flex flex-column gap-3 ps-5">
                  <span className="fw-bold m-0 h1">Featured Company</span>
                  <p className="black-50-t">
                    Dui vel aliquam nullam nulla natoque iaculis viverra conubia
                    letius. Primis non rhoncus dolor a urna finibus ultricies
                    libero.
                  </p>
                  <button className="btn-c1">BROWSE COMPANY</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="community position-relative">
          <div className="community-bg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div
                    className="col-12 col-lg-6 mt-5 mt-lg-0 order-0 order-lg-1"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <div className="d-flex flex-column gap-3 ps-5">
                      <span className="fw-bold m-0 h1 white-t">
                        Join our community of talented professionals by applying
                        for a job today!
                      </span>
                      <p className="white-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                      <button className="btn-c1">DISCOVER MORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="count-up"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="container count-box white-b">
              <div className="row">
                <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                  <div className="count-number">
                    <CountUp
                      end={100}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                    />
                    K+
                  </div>
                  <h6 className="fw-bold">Member Active</h6>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                  <div className="count-number">
                    <CountUp
                      end={14}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                    />
                    K+
                  </div>
                  <h6 className="fw-bold">Companies</h6>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                  <div className="count-number">
                    <CountUp
                      end={270}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                    />
                    +
                  </div>
                  <h6 className="fw-bold">Expert Trainers</h6>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                  <div className="count-number">
                    <CountUp
                      end={15}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                    />
                    K+
                  </div>
                  <h6 className="fw-bold">Years of Experience</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
