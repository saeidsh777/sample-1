import React from "react";
import Header from "../../Components/Header/Header";
import Ltpb from "../../Components/Ptpb/Ltpb";
import ImgTemplate from "../../Components/Experience/ImgTemplate";
import ServicesBox from "../../Components/ServicesBox/ServicesBox";
import { LightbulbFill } from "react-bootstrap-icons";

import AOS from "../../utils/aos";

import "./About.css";
import CountUpBox from "../../Components/CountUpBox/CountUpBox";

export default function About() {
  return (
    <div className="About">
      <Header>
        <section className="header-banner-about d-flex align-items-center justify-content-center position-relative">
          <div className="bg-cover"></div>
          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-bold text-center white-t">About us</h1>
              <h3 className="text-center white-t">
                Apply now and take the first step in your career journey!
              </h3>
            </div>
          </div>
        </section>
      </Header>

      <main>
        <section className="who-we-are white-b py-5">
          <div className="container">
            <div className="row align-items-center py-5">
              <div
                className="col-12 col-lg-6"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <Ltpb
                  l="WHO WE ARE"
                  t="Here’s to growth and happiness in every person’s career journey"
                  p="Donec class lacinia vel hac laoreet amet et dictumst suspendisse. Maximus tortor pede egestas quis facilisis est. Neque dis fringilla augue mollis viverra enim conubia pulvinar."
                  b="DISCOVER MORE"
                />
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
                <ImgTemplate
                  srcImg="/images/portrait-black.jpg"
                  labelImg={true}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="our-value white-50-b">
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-lg-5"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <Ltpb
                  l="OUR VALUE"
                  t="Recruitment company work with effectiveness."
                  p="Ligula leo ipsum aliquam sem vel fames feugiat consequat platea nec placerat. Bibendum pulvinar taciti dignissim at tempor conubia placerat arcu cursus."
                />
              </div>

              <div
                className="col-12 col-lg-7"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="row">
                  <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                    <ServicesBox
                      className="flex-grow-1"
                      Icon={LightbulbFill}
                      title="Our Vision"
                      body='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."'
                    />
                  </div>
                  <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                    <ServicesBox
                      className="flex-grow-1"
                      Icon={LightbulbFill}
                      title="Our Vision"
                      body='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="community-about position-relative">
          <div className="community-bg-about">
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
                      t="Join our community of talented professionals by applying for a job today!"
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

        <section>
          <CountUpBox />

          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-6 m-auto">
                <span className="d-block text-center h1 fw-bold">
                  Awesome people behind us.
                </span>
                <p className="black-50-t text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="col-12">
                <div className="row">
                    <div className="col-3">
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
