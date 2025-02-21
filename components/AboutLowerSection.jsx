import countryData from '../src/Api/countryData.json'

const AboutLowerSection = () => {
  return (

    <div className="container">

      <div className="headingAbout">
        <h1>Here are the <span>Interesting Facts</span></h1>
        <h1>we're proud of</h1>
      </div>

      <div className="grid-col-three">


        {countryData.map((props, key) => {
          const { country, fact, population, capital } = props;
          return (

            <div className="card bg-blue-box" key={key}>

              <p className='country-name'><h2 className="card-title">{country}</h2></p>

              <p>
                <span className="card-description">
                  Capitle : {capital}
                </span>
              </p>
              <p>
                <span className="card-description">
                  Population : {population}
                </span>
              </p>
              <p>
                <span className="card-description">
                  Fact : {fact}
                </span>
              </p>
            </div>
          )

        })}
      </div>

    </div>

  )
}
export default AboutLowerSection