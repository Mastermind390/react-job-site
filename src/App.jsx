import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayouts from './layouts/mainLayouts';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';




function App() {
// add new job
  const addJob  = async (newjob) => {
    const res = await fetch('/api/jobs', {
      method : "POST",
      headers : {
        'content-type' :  'application/json',
      },
      body : JSON.stringify(newjob)
    });
    return;
  }

  //delete job
  const deleteJob = async ({id}) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method : "DELETE",
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayouts />} >
          <Route index element={ <HomePage /> } />
          <Route path='/jobs' element={ <JobsPage /> } />
          <Route path='/add-job' element={ <AddJobPage addJobSubmit={addJob} /> } />
          <Route path='/edit-job/:id' element={ <EditJobPage /> }  loader={jobLoader}/>
          <Route path='/jobs/:id' element={ <JobPage deleteJob={deleteJob} /> }  loader={jobLoader}/>
          <Route path='*' element={ <NotFoundPage /> } />
        </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
};

export default App
