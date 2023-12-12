import React from "react";
import "./Contact.css";
import Ltpb from "../../Components/Ptpb/Ltpb";
import Header from "../../Components/Header/Header";
import { GeoAltFill } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
export default function Contact() {
  return (
    <div className="Contact">
      <Header>
        <section className="header-banner-contact d-flex align-items-center justify-content-center position-relative">
          <div className="bg-cover-blue-color"></div>
          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-bold text-center white-t">Contact us</h1>
              <h3 className="text-center white-t">
                We would love to hear from you.
              </h3>
            </div>
          </div>
        </section>
      </Header>

      <section className="get-in-touch">
        <div className="container white-50-b rounded overflow-hidden">
          <div className="row">
            <div className="col-12 col-lg-6 p-4 p-lg-5">
              <Ltpb
                l="GET IN TOUCH"
                t="Don't hesitate to contact us for more information."
                p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <hr />

              <div className="d-flex gap-3 mb-3">
                <GeoAltFill className="fs-1 green-t" />
                <div>
                  <span className="d-block h5 fw-bold mb-2">Head Office</span>
                  <p className="black-50-t m-0">Jalan Cempaka Wangi No 22</p>
                  <p className="black-50-t m-0">Jakarta - Indonesia</p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <EnvelopeFill className="fs-1 green-t" />
                <div>
                  <span className="d-block h5 fw-bold mb-2">Head Office</span>
                  <p className="black-50-t m-0">Jalan Cempaka Wangi No 22</p>
                  <p className="black-50-t m-0">Jakarta - Indonesia</p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <TelephoneFill className="fs-1 green-t" />
                <div>
                  <span className="d-block h5 fw-bold mb-2">Head Office</span>
                  <p className="black-50-t m-0">Jalan Cempaka Wangi No 22</p>
                  <p className="black-50-t m-0">Jakarta - Indonesia</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 g-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.4330400786782!2d51.427912287746516!3d35.80705727675101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0607d6e99c43%3A0x9561c9380a60717f!2sTajrish%20Square%2C%20Tajrish%2C%20Iran!5e0!3m2!1sen!2sau!4v1702376328114!5m2!1sen!2sau"
                width="100%"
                style={{ border: "0", minHeight: "450px", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="send-message">
        <div className="send-message-banner d-flex align-items-center justify-content-center position-relative">
          <div className="bg-cover-blue-color"></div>
          <div className="container position-relative">
            <div className="col-6 m-auto d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-bold text-center white-t">Send us a message</h1>
              <p className="text-center white-t">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 mx-auto">
              <div className="form-box p-3 p-md-5">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        className="input"
                        name="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="Company">
                        Company
                      </label>
                      <input
                        id="Company"
                        className="input"
                        name="Company"
                        type="text"
                        placeholder="Company"
                      />
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="Phone">
                        Phone
                      </label>
                      <input
                        id="Phone"
                        className="input"
                        name="Phone"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="Email">
                        Email
                      </label>
                      <input
                        id="Email"
                        className="input"
                        name="Email"
                        type="text"
                        placeholder="Email"
                      />
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="Division">
                        Division
                      </label>
                      <select
                        id="Division"
                        className="select-box"
                        defaultValue="ok"
                      >
                        <option  value="-1">Operational</option>
                        <option  value="Operational">saeid</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
