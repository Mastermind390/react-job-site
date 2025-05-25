import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayouts from './layouts/mainLayouts';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'




function App() {

  const addJob  = (newjob) => {
    console.log(newjob)
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayouts />} >
          <Route index element={ <HomePage /> } />
          <Route path='/jobs' element={ <JobsPage /> } />
          <Route path='/add-job' element={ <AddJobPage addJobSubmit={addJob} /> } />
          <Route path='/jobs/:id' element={ <JobPage /> } loader={jobLoader}/>
          <Route path='*' element={ <NotFoundPage /> } />
        </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
};

export default App
