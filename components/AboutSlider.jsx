import wondersOfTheWorld from "../src/Api/wondersOfTheWorld.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { MdOutlineMoving } from "react-icons/md";

const AboutSlider = () => {
  const wondersData = wondersOfTheWorld.wonders;

  const responsive = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (<>
    <div className="container">

      <div className="headingAbout">
        <h1>Here are the <span>Wonders Of </span></h1>
        <h1>The World</h1>
      </div>

      <div className="card-slider">

        <Carousel responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={true}
          arrows={true}
          autoPlay={true}
          rewind={true}
          rewindWithAnimation={true}
        >

          {
            wondersData.map((wonder, index) => {
              const { name, image } = wonder;
              return (
                <>

                  <div className="card bg-blue-box wonder-card" key={index}>

                    <p>
                      <h2 className="images-name">{name}</h2>
                    </p>

                    <div className="slider-img-container">

                      <img src={image} alt="" />

                    </div>

                    <div className="layer">
                      <NavLink to={`/about/${name}`}>
                        <button>
                          Visit <MdOutlineMoving />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </>

              )
            })
          }
        </Carousel>;
      </div>
    </div>
  </>)
}
export default AboutSlider