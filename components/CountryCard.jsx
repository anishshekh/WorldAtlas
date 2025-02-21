import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const { name, flags, population, region, capital } = country;
  return (
    <>
      <div className="card bg-blue-box country-card">

        <div className="flags">
          <img src={flags.svg} alt="" />
        </div>
        <div className="country-card-content">
          <p>
            <h2 className="card-title">
              {name.common.length > 10 ? name.common.slice(0, 10) + " ..." : name.common}
            </h2>
          </p>

          <p>
            <span className="card-description">
              Capital : <span>{capital[0]}</span>
            </span>
          </p>

          <p>
            <span className="card-description">
              Region : <span>{region}</span>
            </span>
          </p>

          <p>
            <span className="card-description">
              Population : <span>{population.toLocaleString()}</span>
            </span>
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button>read more <FaArrowRightLong className="icon" /></button>
          </NavLink>
        </div>
      </div>

    </>
  )

}
export default CountryCard