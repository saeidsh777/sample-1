import React from "react";

import Header from "../../Components/Header/Header";
import LastJob from "../../Components/LastJob/LastJob";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../Components/Footer/Footer";

import AOS from "aos";

import CountUp from "react-countup";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Mortarboard } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { Stars } from "react-bootstrap-icons";
import { Headset } from "react-bootstrap-icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "aos/dist/aos.css";
import "./Home.css";

export default function Home() {
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
            <LastJob />
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
        </section>

        <section className="about">
          <div
            className="count-up"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="container count-box white-b">
              <div className="row">
                <div className="col-6 col-lg-3 d-flex flex-column justify-content-center align-items-center border-end border-bottom">
                  <div className="count-number">
                    <CountUp
                      end={100}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                    />
                    K+
                  </div>
                  <h6 className="fw-bold text-center">Member Active</h6>
                </div>
                <div className="col-6 col-lg-3 d-flex flex-column justify-content-center align-items-center border-end border-bottom">
                  <div className="count-number">
                    <CountUp
                      end={14}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                    />
                    K+
                  </div>
                  <h6 className="fw-bold text-center">Companies</h6>
                </div>
                <div className="col-6 col-lg-3 d-flex flex-column justify-content-center align-items-center border-end">
                  <div className="count-number">
                    <CountUp
                      end={270}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                    />
                    +
                  </div>
                  <h6 className="fw-bold text-center">Expert Trainers</h6>
                </div>
                <div className="col-6 col-lg-3 d-flex flex-column justify-content-center align-items-center">
                  <div className="count-number">
                    <CountUp
                      end={15}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                      scrollSpyDelay={200}
                      preserveValue={true}
                    />
                    K+
                  </div>
                  <h6 className="fw-bold text-center">Years of Experience</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <div>
              <div className="about-header">
                <p className="green-t text-center">
                  LETS START YOUR CAREERS HERE!
                </p>
                <span className="h1 text-center fw-bold d-block mb-4">
                  What they say about us
                </span>
              </div>

              <Swiper
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper pb-5"
              >
                <SwiperSlide>
                  <div className="comment-box p-4 white-50-b rounded">
                    <div className="comment-header text-center mb-4">
                      <img
                        className="img-user-comment"
                        src="/images/freelancer.jpg"
                        alt="img-user"
                      />
                    </div>

                    <div className="comment-body text-center">
                      <q className="black-50-t">
                        Proin tempus pede eros nullam vivamus convallis nunc.
                        Sollicitudin cubilia porta convallis ad donec semper
                        aliquam aptent dignissim nunc.
                      </q>
                    </div>

                    <div className="comment-footer mt-3">
                      <cite className="d-flex flex-column align-items-center">
                        <span className="text-center h5 fw-bold green-t">
                          Stanley Mcdonald
                        </span>
                        <span className="text-center black-50-t">Sumatra</span>
                      </cite>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="comment-box p-4 white-50-b rounded">
                    <div className="comment-header text-center mb-4">
                      <img
                        className="img-user-comment"
                        src="/images/freelancer.jpg"
                        alt="img-user"
                      />
                    </div>

                    <div className="comment-body text-center">
                      <q className="black-50-t">
                        Proin tempus pede eros nullam vivamus convallis nunc.
                        Sollicitudin cubilia porta convallis ad donec semper
                        aliquam aptent dignissim nunc.
                      </q>
                    </div>

                    <div className="comment-footer mt-3">
                      <cite className="d-flex flex-column align-items-center">
                        <span className="text-center h5 fw-bold green-t">
                          Stanley Mcdonald
                        </span>
                        <span className="text-center black-50-t">Sumatra</span>
                      </cite>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="comment-box p-4 white-50-b rounded">
                    <div className="comment-header text-center mb-4">
                      <img
                        className="img-user-comment"
                        src="/images/freelancer.jpg"
                        alt="img-user"
                      />
                    </div>

                    <div className="comment-body text-center">
                      <q className="black-50-t">
                        Proin tempus pede eros nullam vivamus convallis nunc.
                        Sollicitudin cubilia porta convallis ad donec semper
                        aliquam aptent dignissim nunc.
                      </q>
                    </div>

                    <div className="comment-footer mt-3">
                      <cite className="d-flex flex-column align-items-center">
                        <span className="text-center h5 fw-bold green-t">
                          Stanley Mcdonald
                        </span>
                        <span className="text-center black-50-t">Sumatra</span>
                      </cite>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="comment-box p-4 white-50-b rounded">
                    <div className="comment-header text-center mb-4">
                      <img
                        className="img-user-comment"
                        src="/images/freelancer.jpg"
                        alt="img-user"
                      />
                    </div>

                    <div className="comment-body text-center">
                      <q className="black-50-t">
                        Proin tempus pede eros nullam vivamus convallis nunc.
                        Sollicitudin cubilia porta convallis ad donec semper
                        aliquam aptent dignissim nunc.
                      </q>
                    </div>

                    <div className="comment-footer mt-3">
                      <cite className="d-flex flex-column align-items-center">
                        <span className="text-center h5 fw-bold green-t">
                          Stanley Mcdonald
                        </span>
                        <span className="text-center black-50-t">Sumatra</span>
                      </cite>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="comment-box p-4 white-50-b rounded">
                    <div className="comment-header text-center mb-4">
                      <img
                        className="img-user-comment"
                        src="/images/freelancer.jpg"
                        alt="img-user"
                      />
                    </div>

                    <div className="comment-body text-center">
                      <q className="black-50-t">
                        Proin tempus pede eros nullam vivamus convallis nunc.
                        Sollicitudin cubilia porta convallis ad donec semper
                        aliquam aptent dignissim nunc.
                      </q>
                    </div>

                    <div className="comment-footer mt-3">
                      <cite className="d-flex flex-column align-items-center">
                        <span className="text-center h5 fw-bold green-t">
                          Stanley Mcdonald
                        </span>
                        <span className="text-center black-50-t">Sumatra</span>
                      </cite>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="comment-box p-4 white-50-b rounded">
                    <div className="comment-header text-center mb-4">
                      <img
                        className="img-user-comment"
                        src="/images/freelancer.jpg"
                        alt="img-user"
                      />
                    </div>

                    <div className="comment-body text-center">
                      <q className="black-50-t">
                        Proin tempus pede eros nullam vivamus convallis nunc.
                        Sollicitudin cubilia porta convallis ad donec semper
                        aliquam aptent dignissim nunc.
                      </q>
                    </div>

                    <div className="comment-footer mt-3">
                      <cite className="d-flex flex-column align-items-center">
                        <span className="text-center h5 fw-bold green-t">
                          Stanley Mcdonald
                        </span>
                        <span className="text-center black-50-t">Sumatra</span>
                      </cite>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="comment-box p-4 white-50-b rounded">
                    <div className="comment-header text-center mb-4">
                      <img
                        className="img-user-comment"
                        src="/images/freelancer.jpg"
                        alt="img-user"
                      />
                    </div>

                    <div className="comment-body text-center">
                      <q className="black-50-t">
                        Proin tempus pede eros nullam vivamus convallis nunc.
                        Sollicitudin cubilia porta convallis ad donec semper
                        aliquam aptent dignissim nunc.
                      </q>
                    </div>

                    <div className="comment-footer mt-3">
                      <cite className="d-flex flex-column align-items-center">
                        <span className="text-center h5 fw-bold green-t">
                          Stanley Mcdonald
                        </span>
                        <span className="text-center black-50-t">Sumatra</span>
                      </cite>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="comment-box p-4 white-50-b rounded">
                    <div className="comment-header text-center mb-4">
                      <img
                        className="img-user-comment"
                        src="/images/freelancer.jpg"
                        alt="img-user"
                      />
                    </div>

                    <div className="comment-body text-center">
                      <q className="black-50-t">
                        Proin tempus pede eros nullam vivamus convallis nunc.
                        Sollicitudin cubilia porta convallis ad donec semper
                        aliquam aptent dignissim nunc.
                      </q>
                    </div>

                    <div className="comment-footer mt-3">
                      <cite className="d-flex flex-column align-items-center">
                        <span className="text-center h5 fw-bold green-t">
                          Stanley Mcdonald
                        </span>
                        <span className="text-center black-50-t">Sumatra</span>
                      </cite>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="comment-box p-4 white-50-b rounded">
                    <div className="comment-header text-center mb-4">
                      <img
                        className="img-user-comment"
                        src="/images/freelancer.jpg"
                        alt="img-user"
                      />
                    </div>

                    <div className="comment-body text-center">
                      <q className="black-50-t">
                        Proin tempus pede eros nullam vivamus convallis nunc.
                        Sollicitudin cubilia porta convallis ad donec semper
                        aliquam aptent dignissim nunc.
                      </q>
                    </div>

                    <div className="comment-footer mt-3">
                      <cite className="d-flex flex-column align-items-center">
                        <span className="text-center h5 fw-bold green-t">
                          Stanley Mcdonald
                        </span>
                        <span className="text-center black-50-t">Sumatra</span>
                      </cite>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        <section className="benefit">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-12 col-lg-6 order-1 order-lg-0 mt-5 mt-lg-0"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <p className="green-t">LETS START YOUR CAREERS HERE!</p>
                <span className="h1 fw-bold d-block mb-4">
                  Adding People Strategy in Every Company.
                </span>
                <p className="black-50-t">
                  Commodo vel nec eleifend fames ad tempus conubia interdum.
                  Consectetur urna finibus porttitor ad si blandit dignissim.
                </p>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <div className="benefit-icon-box green-b">
                    <PersonCircle className="white-t benefit-icon" />
                  </div>
                  <div>
                    <span className="h5 fw-bold d-block">
                      By real employees
                    </span>
                    <p className="black-50-t m-0">
                      Lorem sollicitudin orci lacinia inceptos feugiat quam et
                      lectus sodales
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="benefit-icon-box green-b">
                    <Headset className="white-t benefit-icon" />
                  </div>

                  <div>
                    <span className="h5 fw-bold d-block">
                      Comprehensive ratings
                    </span>
                    <p className="black-50-t m-0">
                      Lorem sollicitudin orci lacinia inceptos feugiat quam et
                      lectus sodales
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="benefit-icon-box green-b">
                    <Stars className="white-t benefit-icon" />
                  </div>
                  <div>
                    <span className="h5 fw-bold d-block">Free Coaching</span>
                    <p className="black-50-t m-0">
                      Lorem sollicitudin orci lacinia inceptos feugiat quam et
                      lectus sodales
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-12 col-lg-6 order-0 order-lg-1"
                data-aos="fade-zoom"
                data-aos-easing="ease-in-out"
                data-aos-offset="200"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="benefit-img-box">
                  <img
                    className="masking-img"
                    src="/images/benefit.jpg"
                    alt="benefit-img"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="questions">
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-lg-4"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <p className="green-t text-center text-lg-start">
                  COMMON QUESTIONS
                </p>
                <span className="h1 fw-bold d-block mb-4 text-center text-lg-start">
                  Frequently Ask Question.
                </span>
                <p className="black-50-t text-center text-lg-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>

              <div
                className="col-12 col-lg-8 "
                data-aos="fade-zoom"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Nec sit scelerisque curae montes et?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Vel neque duis lobortis elementum himenaeos erat?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Luctus aliquam elementum habitasse consequat quam?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Velit felis nisi non tempor eget?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Sit imperdiet fringilla nulla letius vestibulum?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
