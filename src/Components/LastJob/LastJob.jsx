import React, { useState } from 'react'
import JobBox from "../../Components/JobBox/JobBox";
import jobDatas from "../../data/jobData";

export default function LastJob() {
  const [jobData, setJobData] = useState(jobDatas);

  return (
    <>
      <div className="row">
        <span className="h1 text-center fw-bold d-block mb-4">
          Latest Job Listing
        </span>

        {jobData.map((jobItem, index) => (
          <div
            key={index}
            className="col-12 col-lg-4 mb-4"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="200"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <JobBox {...jobItem} />
          </div>
        ))}
      </div>
    </>
  );
}
