import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"




const MainLayouts = () => {
  return (
    <>
        <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayouts
