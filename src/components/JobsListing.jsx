import React from 'react'
import JobCard from './JobCard';
import job from '../jobs.json'

const JobsListing = () => {

  const recentJob = job.slice(0, 3)

  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* <!-- Job Listing 1 --> */}
                {recentJob.map((job)=>{
                  return <JobCard type={job.type} description={job.description} title={job.title} salary={job.salary} location={job.location} jobId={job.id} key={job.id}/>
                })}
                
               
                </div>
            </div>
        </section>
    </div>
  )
}

export default JobsListing
