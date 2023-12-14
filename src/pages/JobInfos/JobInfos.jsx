import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../Components/Header/Header";
import jobDatas from "../../data/jobData";
import Footer from "../../Components/Footer/Footer";

import "./JobInfos.css";
import JobDetail from "../../Components/JobDetail/JobDetail";
import AboutCompany from "../../Components/AboutCompany/AboutCompany";
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
          <div className="row">
            <div className="col-12 col-xl-8">
              <JobDetail {...mainJob} />
            </div>

            <div className="col-12 col-xl-4 mt-3 mt-xl-0">
              <div className="row">
                <div className="col-12">
                  <AboutCompany {...mainJob} />
                </div>

                <div className="col-12 mt-3">
                  <div style={{overflow:'hidden', borderRadius:'10px !important'}}>
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
                  <div className="green-b">
                    
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
