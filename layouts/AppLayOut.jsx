import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ScrollTop } from "../components/ScrollTop";

const AppLayOut = () => {
  return (<>
    <ScrollTop />
    <Header />
    <Outlet />
    <Footer />
  </>)

}


export default AppLayOut