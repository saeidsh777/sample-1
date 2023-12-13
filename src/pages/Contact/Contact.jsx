import React, { useState } from "react";

import Header from "../../Components/Header/Header";
import Ltpb from "../../Components/Ptpb/Ltpb";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";

import { useForm } from "../../Hooks/useForm";

import { GeoAltFill } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";

import "./Contact.css";

export default function Contact() {
  const [formState, onValidHandler] = useForm(
    {
      name: {
        value: "",
        isValidInput: false,
      },
      company: {
        value: "",
        isValidInput: false,
      },
      phone: {
        value: "",
        isValidInput: false,
      },
      email: {
        value: "",
        isValidInput: false,
      },
      message: {
        value: "",
        isValidInput: false,
      },
      subject: {
        value: "",
        isValidInput: false,
      },
    },
    false
  );

  useState(() => {
    console.log(formState);
  }, [formState]);

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
            <div
              className="col-6 m-auto d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
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
            <div
              className="col-12 col-lg-7 mx-auto"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="form-box p-3 p-md-5">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="name">
                        Name
                      </label>
                      <Input
                        typeInput="text"
                        id="name"
                        onValidHandler={onValidHandler}
                      />
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="Company">
                        Company
                      </label>
                      <Input
                        typeInput="text"
                        id="company"
                        onValidHandler={onValidHandler}
                      />
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="Phone">
                        Phone
                      </label>
                      <Input
                        typeInput="text"
                        id="phone"
                        onValidHandler={onValidHandler}
                      />
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="Email">
                        Email
                      </label>
                      <Input
                        typeInput="email"
                        id="email"
                        onValidHandler={onValidHandler}
                      />
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="Division">
                        Division
                      </label>
                      <select
                        id="Division"
                        className="select-box decorated"
                        defaultValue="ok"
                      >
                        <option className="option-item" value="-1">
                          Operational
                        </option>
                        <option className="option-item" value="Operational">
                          Human Resource
                        </option>
                        <option className="option-item" value="Operational">
                          Marketing
                        </option>
                        <option className="option-item" value="Operational">
                          Technical Support
                        </option>
                      </select>
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="Subject">
                        Subject
                      </label>
                      <Input
                        typeInput="text"
                        id="subject"
                        onValidHandler={onValidHandler}
                      />
                    </div>

                    <div className="col-12 d-flex flex-column mb-3">
                      <label className="label-input" htmlFor="Message">
                        Message
                      </label>
                      <Input
                        id="message"
                        typeInput="textArea"
                        name="Message"
                        onValidHandler={onValidHandler}
                      />
                    </div>

                    <div className="col-12">
                      <button className="btn-c1 w-100 w-lg-auto">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
