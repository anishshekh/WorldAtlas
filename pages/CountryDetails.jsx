import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect, useTransition } from "react";
import Loader from "../components/Loader";
import axios from 'axios';

const CountryDetails = () => {

  // Extract the `id` parameter from the URL to identify the country.
  const { id } = useParams()  // Destructure `id` from `params`

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch country details whenever the `id` changes.
  useEffect(() => {
    (async () => {
      try {

        const response = await axios.get(`https://restcountries.com/v3.1/name/${id}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);


        if (response.status === 200) {
          setCountry(response.data[0])
        }

      }
      catch (error) {
        setError("Failed to fetch country details. Please try again later.");
      }
      finally {
        setLoading(false);
      }
    })();

  }, [id])

  // Display a loader while the data is being fetched.
  if (loading) return <Loader />;

  // Display an error message if the data fetching fails.
  if (error) return (

    <div className="country-container error">
      <div className="container">
        <p className="error-message">ERROR : {error}</p>

        <NavLink to={`/country`} className="btn-container">
          <button className="error-back-btn back-btn">Go Back</button>
        </NavLink>

      </div>
    </div>
  );

  // Render the country details if the data is successfully fetched.
  return (
    <>
      <div className="country-container">
        <div className="card country-details bg-blue-box">

          <div className="container">

            {country && (

              <div className="grid-two-coulumns">

                {/* Display the country flag. */}
                <div className="flag-img">
                  <img src={country.flags.svg} alt="" />
                </div>

                {/* Display detailed information about the country. */}
                <div className="country-contant">
                  <p className="card-title">{country.name.common}</p>
                  <div className="country-info">
                    {/* Native Name */}
                    <p className="card-description">
                      native Names :{" "}
                      <span>
                        {Object.keys(country.name.nativeName)
                          .map(key => country.name.nativeName[key].common)
                          .join(", ")}
                      </span>
                    </p>

                    {/* Population */}
                    <p className="card-description">
                      population : <span>{country.population.toLocaleString()}</span>
                    </p>

                    {/* Region */}
                    <p className="card-description">
                      region : <span>{country.region}</span>
                    </p>

                    {/* Subregion */}
                    <p className="card-description">
                      Sub Region : <span>{country.subregion}</span>
                    </p>

                    {/* Capital */}
                    <p className="card-description">
                      capital : <span>{country.capital} </span>
                    </p>

                    {/* Top-Level Domain */}
                    <p className="card-description">
                      Top Level Domain : <span>{country.tld}</span>
                    </p>

                    {/* Currencies */}
                    <p className="card-description">
                      Currencies : {" "}
                      <span>
                        {Object.keys(country.currencies).
                          map(curElem => country.currencies[curElem].name)
                          .join(", ")}
                      </span>
                    </p>

                    {/* Languages */}
                    <p className="card-description">
                      Languages:{" "}
                      <span>
                        {Object.keys(country.languages).
                          map(curLang => country.languages[curLang])
                          .join(", ")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

            )}
          </div>

          {/* Button to navigate back to the country list. */}
          <NavLink to={`/country`} className="btn-container">
            <button className="back-btn">Go Back</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;