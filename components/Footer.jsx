import contactData from "../src/Api/contactData.json"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {

  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  };

  return (
    <>
      <footer>

        <div className="container">

          <div className="grid-col-three">
            {
              contactData.map((props, key) => {
                const { icon, title, details } = props;
                return (

                  <div className="contact-card" key={key}>
                    <div className="footer-icons">{footerIcons[icon]}</div>
                    <div className="footer-contact-text">

                      <label> {title}</label>

                      <p className="footer-contact-details">{details}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>


        <div className="copy-right-aria">
          <div className="container">
            <div className="copy-right-two-col">

              <div className="footer-menu">
                <ul>
                  <li><Link to='/' className="Link">Home</Link></li>
                  <li><Link to='https://www.instagram.com/anishshekh182' target="_blank" className="Link" >Social</Link></li>
                  <li><Link to='/about' className="Link">About</Link></li>
                  <li><Link to='/contact' className="Link">Contact</Link></li>
                </ul>
              </div>

              <div className="copy-right-text">
                <p>Copyright &copy; 2025, All Right Reserved</p>
              </div>


            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
export default Footer