import { useParams, NavLink } from "react-router-dom"
import Api from "../src/Api/wondersOfTheWorld.json"



const VisitAbout = () => {
  const { visit } = useParams();

  const data = Api.wonders;

  const filtredData = data.filter((wonder) => visit === wonder.name)

  return <>
    {
      filtredData.map((wonder) => {
        const { name, city, country, unique_facts, build_date, interesting_facts, image_visit } = wonder;
        return (<>

          <div className="country-container">
            <div className="card country-details bg-blue-box ">

              <div className="container">


                <div className="grid-two-coulumns visit-columns">


                  <div className="flag-img visit-img">
                    <img src={image_visit} alt="" />
                  </div>


                  <div className="country-contant">

                    <p className="card-title">{name}</p>

                    <div className="country-info">


                      <p>
                        Country :{" "}
                        <span className="card-description">
                          {country}
                        </span>
                      </p>

                      <p>
                        City : {" "}
                        <span className="card-description">
                          {city}
                        </span>
                      </p>

                      <p>
                        Build Date :{" "}
                        <span className="card-description">
                          {build_date}
                        </span>
                      </p>

                      <p >
                        Unique Facts :{" "}
                        <span className="card-description">
                          {unique_facts}
                        </span>
                      </p>

                      <p >
                        Interesting Facts :{" "}
                        <span className="card-description">
                          {interesting_facts}
                        </span>
                      </p>


                    </div>
                  </div>
                </div>
              </div>

              {/* Button to navigate back to the country list. */}
              <NavLink to={`/about`} className="btn-container">
                <button className="back-btn visit-back-btn">Go Back</button>
              </NavLink>
            </div>
          </div>

        </>)
      })
    }
  </>
}

export default VisitAbout;
