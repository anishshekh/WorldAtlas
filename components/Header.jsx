import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoEarthSharp } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";



const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menuToggle = () => {
    setShowMenu(!showMenu)
  }
  return (

    <div className="back-heading">
      <header>
        <div className="container">
          <div className="columns-two">
            <div className="logoContainer">
              <IoEarthSharp className="icon" />
              <h1>World<span>Atlas</span></h1>
            </div>
            <ul className={showMenu ? 'mobile-menu' : 'navContainer'}>
              <li>
                <FaHome className="header-icons" />
                <NavLink to='/' className="navList">Home</NavLink>
              </li>
              <li>
                <FaInfoCircle className="header-icons" />
                <NavLink to='/about' className="navList">About</NavLink>
              </li>

              <li>
                <FaEarthAsia className="header-icons" />
                <NavLink to='/country' className="navList">Country</NavLink>
              </li>
              <li>
                <IoMdContact className="header-icons" />
                <NavLink to='/contact' className="navList"> <span>Contact</span> </NavLink>
              </li>

            </ul>
            {
              !showMenu ? <div className="ham-icon">
                <button onClick={menuToggle}><GiHamburgerMenu /></button>
              </div> :
                <div className="ham-icon">
                  <button onClick={menuToggle}><MdClear /></button>
                </div>
            }
          </div>
        </div>
      </header>
    </div>
  )
}
export default Header