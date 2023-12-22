import React from 'react'
import './FeaturedCompany.css'
import Ltpb from '../Ptpb/Ltpb';
export default function FeaturedCompany() {
  return (
    <section className="featured-company d-flex align-items-center white-50-b">
      <div className="container">
        <div className="row align-items-center overflow-x-hidden">
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
            className="col-12 col-lg-6 mt-5 mt-lg-0 order-0 order-lg-1 ps-lg-5 overflow-x-hidden"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="d-flex flex-column gap-3">
              <Ltpb
                t="Featured Company"
                p="Dui vel aliquam nullam nulla natoque iaculis viverra conubia
                    letius. Primis non rhoncus dolor a urna finibus ultricies
                    libero."
                b="BROWSE COMPANY"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
