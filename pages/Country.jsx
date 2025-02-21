import { useEffect, useState, useMemo } from "react";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Country = () => {

  const [searchData, setSearchData] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch countries data on component mount
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags');
        const data = await response.json();
        setCountries(data);

      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("Failed to fetch countries. check your internate connection..");
      } finally {
        setLoading(false);
      }
    })();

  }, []);


  // Memoize filtered countries to avoid recalculating on every render
  const filteredCountries = useMemo(() => {
    if (!searchData) return countries;

    return countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(searchData.toLowerCase()) ||
        country.region.toLowerCase().includes(searchData.toLowerCase())
    );
  }, [countries, searchData]);


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

  return (
    <div className="container">
      <div className="country-container">
        {
          loading ? (
            <Loader />
          ) : (
            <>
              <SearchBar search={searchData} setSearch={setSearchData} />

              {filteredCountries.length === 0 ? (
                <div className="search-section card">
                  <p> 😞 Sorry..! {searchData} is not found. </p>
                </div>
              ) : (
                <Pagination data={filteredCountries} itemsPerPage={16} />
              )}
            </>
          )}

      </div>
    </div>
  )
}
export default Country