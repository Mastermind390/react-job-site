import React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayouts from './layouts/mainLayouts';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts />} >
    <Route index element={ <HomePage /> } />
    <Route path='/jobs' element={ <JobsPage /> } />
    <Route path='/jobs/:id' element={ <JobPage /> } />
    <Route path='*' element={ <NotFoundPage /> } />
  </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
};

export default App
