import React from "react";

import Header from "../../Components/Header/Header";
import LastJob from "../../Components/LastJob/LastJob";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../Components/Footer/Footer";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Mortarboard } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import { Stars } from "react-bootstrap-icons";
import { Headset } from "react-bootstrap-icons";

import ImgTemplate from "../../Components/Experience/ImgTemplate";
import Ltpb from "../../Components/Ptpb/Ltpb";
import ServicesBox from "../../Components/ServicesBox/ServicesBox";
import CountUpBox from "../../Components/CountUpBox/CountUpBox";
import "./Home.css";
import CommentBox from "../../Components/CommentBox/CommentBox";
import FeaturedCompany from "../../Components/FeaturedCompany/FeaturedCompany";

export default function Home() {
  return (
    <div className="home">
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
                <ServicesBox
                  Icon={Mortarboard}
                  title="Talents Agency"
                  body="Facilisi etiam consectetur mi nibh bibendum posuere
                    ultricies cubilia donec potenti si"
                />
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
                <ServicesBox
                  bgG={true}
                  Icon={Mortarboard}
                  title="Portal Job"
                  body="Facilisi etiam consectetur mi nibh bibendum posuere
                    ultricies cubilia donec potenti si"
                />
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
                <ServicesBox
                  Icon={Mortarboard}
                  title="Careers Coaching"
                  body="Facilisi etiam consectetur mi nibh bibendum posuere
                    ultricies cubilia donec potenti si"
                />
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
                <ImgTemplate srcImg="/images/image-woman.jpg" labelImg={true} />
              </div>

              <div
                className="col-12 col-lg-6 mt-5 mt-lg-0 ps-5"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <Ltpb
                  l="OUR SERVICE"
                  t="Bridge for industrial and corporate development."
                  p="Donec class lacinia vel hac laoreet amet et dictumst
                    suspendisse. Maximus tortor pede egestas quis facilisis est.
                    Neque dis fringilla augue mollis viverra enim conubia
                    pulvinar."
                  b="DISCOVER MORE"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="latest-job">
          <div className="container">
            <LastJob />
          </div>
        </section>
        
        <FeaturedCompany/>

        <section className="community position-relative">
          <div className="community-bg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div
                    className="col-12 col-lg-6 mt-5 mt-lg-0 order-0 order-lg-1 ps-lg-5"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <Ltpb
                      colorW
                      t="Join our community of talented professionals by applying
                        for a job today!"
                      p="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo."
                      b="DISCOVER MORE"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <CountUpBox />

          <div className="container mt-5">
            <div>
              <div
                className="about-header"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
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
                  <CommentBox/>
                </SwiperSlide>
                <SwiperSlide>
                  <CommentBox/>
                </SwiperSlide>
                <SwiperSlide>
                  <CommentBox/>
                </SwiperSlide>
                <SwiperSlide>
                  <CommentBox/>
                </SwiperSlide>
                <SwiperSlide>
                  <CommentBox/>
                </SwiperSlide>
                <SwiperSlide>
                  <CommentBox/>
                </SwiperSlide>
                <SwiperSlide>
                  <CommentBox/>
                </SwiperSlide>
                <SwiperSlide>
                  <CommentBox/>
                </SwiperSlide>
                <SwiperSlide>
                  <CommentBox/>
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
                <Ltpb
                  l="LETS START YOUR CAREERS HERE!"
                  t="Adding People Strategy in Every Company."
                  p="Commodo vel nec eleifend fames ad tempus conubia interdum.
                  Consectetur urna finibus porttitor ad si blandit dignissim."
                />

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
                <ImgTemplate srcImg="/images/benefit.jpg" />
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
                <Ltpb
                  l="COMMON QUESTIONS"
                  t="Frequently Ask Question."
                  p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo."
                />
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
    </div>
  );
}
