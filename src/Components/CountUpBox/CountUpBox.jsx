import React from 'react'
import CountUp from "react-countup";

import "./CountUpBox.css";
export default function CountUpBox() {
  return (
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
                scrollSpyOnce={true}
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
                scrollSpyOnce={true}
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
                scrollSpyOnce={true}
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
  );
}
