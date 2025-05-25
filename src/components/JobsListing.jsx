import React, { useEffect, useState } from 'react'
import JobCard from './JobCard';
import Spinner from './Spinner'

const JobsListing = ({isHome = false}) => {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
        // console.log(data)
      } catch (error) {
        console.log('error fetching data', error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs();
  }, 
  [])

  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>
                {/* <!-- Job Listing 1 --> */}
                {loading ? (<Spinner loading={loading}/>) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {jobs.map((job)=>{
                        return <JobCard type={job.type} description={job.description} title={job.title} salary={job.salary} location={job.location} jobId={job.id} key={job.id}/>
                      })}
                  </div>
                )}
            </div>
        </section>
    </div>
  )
}

export default JobsListing
