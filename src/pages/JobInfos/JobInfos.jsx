import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../../Components/Header/Header";
import jobDatas from "../../data/jobData";
import Input from "../../Components/Input/Input";
import JobDetail from "../../Components/JobDetail/JobDetail";
import AboutCompany from "../../Components/AboutCompany/AboutCompany";
import Footer from "../../Components/Footer/Footer";

import { EnvelopeFill } from "react-bootstrap-icons";

import "./JobInfos.css";

export default function JobInfos() {
  const [mainJob, setMainJob] = useState({});
  const { jobID } = useParams();

  useEffect(() => {
    setMainJob(...jobDatas.filter((job) => job.jobID === jobID));
  }, []);

  return (
    <div>
      <Header />
      <section className="job-infos white-50-b">
        <div className="container-fluid container-lg">
          <div className="row align-items-stretch">
            <div className="col-12 col-xl-8">
              <JobDetail {...mainJob} />
            </div>

            <div className="col-12 col-xl-4 mt-3 mt-xl-0">
              <div className="row">
                <div className="col-12">
                  <AboutCompany {...mainJob} />
                </div>

                <div className="col-12 mt-3">
                  <div
                    style={{
                      overflow: "hidden",
                      borderRadius: "10px !important",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033.4330400786782!2d51.427912287746516!3d35.80705727675101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0607d6e99c43%3A0x9561c9380a60717f!2sTajrish%20Square%2C%20Tajrish%2C%20Iran!5e0!3m2!1sen!2sau!4v1702376328114!5m2!1sen!2sau"
                      width="100%"
                      style={{
                        border: "0",
                        minHeight: "300px",
                        height: "100%",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <div className="green-b p-4 rounded-2">
                    <h3 className="white-t mb-3">Newsletter</h3>
                    <p className="white-t">
                      Sign up our newsletter to get update information, news,
                      insight or promotions.
                    </p>
                    <div className="mb-3">
                      <Input typeInput="text" Name="Name" />
                    </div>
                    <div>
                      <Input typeInput="email" Name="Email" />
                    </div>
                    <button className="btn-c2 mt-3 w-100 w-lg-auto justify-content-center justify-content-xl-start d-flex align-items-center gap-1">
                      <EnvelopeFill/>
                      Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
