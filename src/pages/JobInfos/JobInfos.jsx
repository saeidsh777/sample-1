import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../../Components/Header/Header";
import jobDatas from "../../data/jobData";
import Footer from "../../Components/Footer/Footer";


import "./JobInfos.css";
import JobDetail from "../../Components/JobDetail/JobDetail";
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
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
