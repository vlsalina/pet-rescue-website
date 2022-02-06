import "./Carousel.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { styles } from "../../styles/styles";
import { swipeLeft } from "./Actions";

const Carousel = () => {
  return (
    <div className="carousel--box-2">
      <div className="carousel">
        <div className="carousel__image" id="carousel__image1">
          <img src={"/assets/carousel/bg-2.jpg"} />
          <div className="carousel__buttons carousel__left">
            <a href="#carousel__image3">
              <IconContext.Provider value={styles.arrow}>
                <IoIosArrowBack />
              </IconContext.Provider>
            </a>
          </div>
          <div className="carousel__buttons carousel__right">
            <a href="#carousel__image2">
              <IconContext.Provider value={styles.arrow}>
                <IoIosArrowForward />
              </IconContext.Provider>
            </a>
          </div>
          <section className="carousel--box-3">
            <div className="carousel__info--large carousel--white">
              <p> Do you care?</p>
            </div>
            <div className="carousel__info--small carousel--white">
              <p> We do.</p>
            </div>
            <div className="carousel__info--small carousel--white">
              <p>
                More than 155 pets so far found home a with our help this year
              </p>
            </div>
            <div></div>
          </section>
        </div>
        <div className="carousel__image" id="carousel__image2">
          <img src={"/assets/carousel/bg-6.jpg"} />
          <div className="carousel__buttons carousel__left">
            <a href="#carousel__image1">
              <IconContext.Provider value={styles.arrow}>
                <IoIosArrowBack />
              </IconContext.Provider>
            </a>
          </div>
          <div className="carousel__buttons carousel__right">
            <a href="#carousel__image3">
              <IconContext.Provider value={styles.arrow}>
                <IoIosArrowForward />
              </IconContext.Provider>
            </a>
          </div>
          <section className="carousel--box-4">
            <div className="carousel__info--large carousel--white carousel--end">
              <p>Don't let them suffer</p>
            </div>
            <div className="carousel__info--small carousel--black carousel--end">
              <p>Homeless.</p>
            </div>
            <div className="carousel__info--small carousel--black carousel--end">
              <p>Open your heart and home to a friend for life</p>
            </div>
          </section>
        </div>
        <div className="carousel__image" id="carousel__image3">
          <img src={"/assets/carousel/bg-11.jpg"} />
          <div className="carousel__buttons carousel__left">
            <a href="#carousel__image2">
              <IconContext.Provider value={styles.arrow}>
                <IoIosArrowBack />
              </IconContext.Provider>
            </a>
          </div>
          <div className="carousel__buttons carousel__right">
            <a href="#carousel__image1">
              <IconContext.Provider value={styles.arrow}>
                <IoIosArrowForward />
              </IconContext.Provider>
            </a>
          </div>
          <section className="carousel--box-5">
            <div className="carousel__info--large carousel--white carousel--center">
              <p>Save a life</p>
            </div>
            <div className="carousel__info--small carousel--white carousel--center">
              <p>And make your life better.</p>
            </div>
            <div className="carousel__info--small carousel--white carousel--center">
              <p>Adopt or rescue a shelter pet with our help.</p>
            </div>
            <div></div>
          </section>
        </div>
      </div>
      <div className="carousel--box-1">
        <ul className="carousel__links">
          <li>
            <a href="#carousel__image1">
              <div className="circle" />
            </a>
          </li>
          <li>
            <a href="#carousel__image2">
              <div className="circle" />
            </a>
          </li>
          <li>
            <a href="#carousel__image3">
              <div className="circle" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
