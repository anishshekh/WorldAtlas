import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState, useRef } from "react";
import { IoEarthSharp } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";



const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef(null);


  const menuToggle = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMobile = () => window.innerWidth <= 998;

  return (

    <>
      <header className={`navbar ${isSticky ? "sticky" : ""}`}>

        <div className="container">

          <div className="columns-two">

            <div className="logoContainer">
              <IoEarthSharp className="icon" />
              <h1>World<span>Atlas</span></h1>
            </div>

            <ul
              ref={menuRef}
              className={showMenu ? 'mobile-menu active' : 'navContainer'}>
              <li>
                <FaHome className="header-icons"
                />
                <NavLink
                  to='/'
                  className="navList"
                  onClick={isMobile() ? menuToggle : undefined}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <FaInfoCircle className="header-icons"
                />
                <NavLink
                  to='/about'
                  className="navList"
                  onClick={isMobile() ? menuToggle : undefined}
                >
                  About
                </NavLink>
              </li>

              <li>
                <FaEarthAsia
                  className="header-icons"
                />

                <NavLink
                  to='/country'
                  className="navList"
                  onClick={isMobile() ? menuToggle : undefined}
                >
                  Country
                </NavLink>
              </li>


              <li>

                <IoMdContact
                  className="header-icons"
                />

                <NavLink
                  to='/contact'
                  className="navList"
                  onClick={isMobile() ? menuToggle : undefined}
                >
                  <span>Contact</span>
                </NavLink>
              </li>

            </ul>

            <div className="ham-icon">
              <button onClick={menuToggle}>
                {!showMenu ? <GiHamburgerMenu /> : <MdClear />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`overlay ${showMenu ? 'activeted' : ''}`}
        onClick={menuToggle}>
      </div>
    </>


  )
}
export default Header