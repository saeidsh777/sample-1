import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import jobDatas from "../../data/jobData";

import "./JobInfos.css";
import JobBox from "../../Components/JobBox/JobBox";
export default function JobInfos() {
  const [mainJob, setMainJob] = useState({});
  const { jobID } = useParams();

  useEffect(()=>{
    setMainJob(...jobDatas.filter(job => job.jobID === jobID));
  },[])

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <JobBox {...mainJob}/>
          </div>
        </div>
      </div>
    </div>
  );
}
