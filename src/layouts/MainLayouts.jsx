import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const MainLayouts = () => {
  return (
    <>
        <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default MainLayouts
