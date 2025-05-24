import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobsListing from '../components/JobsListing';
import ViewJobsButton from '../components/ViewJobsButton';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsListing />
      <ViewJobsButton />
    </>
  )
}

export default HomePage

{/* <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobsListing />
      <ViewJobsButton />
    </> */}
