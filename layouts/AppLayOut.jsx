import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ScrollTop } from "../components/ScrollTop";

const AppLayOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (<>
    <ScrollTop />
    <Header />
    <Outlet />
    <Footer />
  </>)

}


export default AppLayOut