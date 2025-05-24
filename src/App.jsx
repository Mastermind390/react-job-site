import React from 'react';
import Navbar from './components/navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobsListing from './components/JobsListing';
import ViewJobsButton from './components/ViewJobsButton';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobsListing />
      <ViewJobsButton />
    </>
  )
};

export default App
