import React, { useState } from 'react'
import './Job.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import jobDatas from '../../data/jobData';
import JobBox from '../../Components/JobBox/JobBox';
export default function Job() {
     const [jobData, setJobData] = useState(jobDatas);
  return (
    <>
    <Header/>
    <section className='job'>
        <div className="container">
            <div className="row">
                <div className="col-12 my-5">
                    <h1 className='fw-bold text-center'>Job List</h1>
                </div>
                <hr className='mb-5'/>
                {jobData.map(jobItem => (
            
                    <div key={jobItem.jobID} className="col-12 col-lg-4 mb-4">
                        <JobBox {...jobItem}/>
                    </div>

                ))}
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
