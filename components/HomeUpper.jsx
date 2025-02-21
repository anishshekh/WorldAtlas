import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


const HomeUpper = () => {

  return (
    <div className="container">
      <div className="grid-two-coulumns">

        <div className="homeHeading">

          <h1>Explore the <span>World, One Country</span> at a Time.</h1>

          <p>
            Discover the history,culture and beauty of every nation. Sort Search and filter through countries to find the details you need.
          </p>

          <NavLink to='/country'>
            <button className="exploring-btn">Start Exploring <FaArrowRightLong className="icon" /></button>
          </NavLink>

        </div>

        <div className="imageContainer">
          <img src="/images/world-map.webp" alt="" />
        </div>

      </div>
    </div>
  )
}

export default HomeUpper