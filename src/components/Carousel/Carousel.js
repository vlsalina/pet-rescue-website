import "./Carousel.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { styles } from "../../styles/styles";
import { swipeLeft } from "./Actions";
import { carousel } from "../../data";
import ButtonA from "../buttons/ButtonA/ButtonA";
import FadeInSection from "../FadeInSection/FadeInSection";

const Carousel = () => {
  return (
    <div className="carousel--box-2">
      <div className="carousel">
        <div className="carousel__image" id="carousel__image1">
          <FadeInSection target={`.gsap-carousel-1`}>
            <picture>
              <source
                meda="(min-width: 1110px)"
                srcSet={carousel.image1.desktop}
              />
              <source
                meda="(min-width: 688px)"
                srcSet={carousel.image1.tablet}
              />
              <img src={carousel.image1.mobile} />
            </picture>
          </FadeInSection>
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
            <div className="carousel__info--top carousel--margin1 gsap-carousel-1">
              <p> Do you care?</p>
            </div>
            <div className="carousel__info--middle carousel--margin1 gsap-carousel-1">
              <p> We do.</p>
            </div>
            <div className="carousel__info--bottom carousel--margin1 gsap-carousel-1 carousel__info--width1">
              <p>
                More than 155 pets so far found home a with our help this year
              </p>
            </div>
            <div className="gsap-carousel-1">
              <ButtonA text={"Get Involved"} />
            </div>
          </section>
        </div>
        <div className="carousel__image" id="carousel__image2">
          <FadeInSection target={`.gsap-carousel-2`}>
            <picture>
              <source
                meda="(min-width: 1110px)"
                srcSet={carousel.image2.desktop}
              />
              <source
                meda="(min-width: 688px)"
                srcSet={carousel.image2.tablet}
              />
              <img src={carousel.image2.mobile} />
            </picture>
          </FadeInSection>
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
            <div className="carousel__info--top carousel--end carousel--margin1 gsap-carousel-2 carousel__info-4--width">
              <p>Don't let them suffer</p>
            </div>
            <div className="carousel__info--middle carousel--end carousel--margin1 gsap-carousel-2">
              <p>Homeless.</p>
            </div>
            <div className="carousel__info--bottom carousel--end carousel--margin1 gsap-carousel-2 carousel__info--width2">
              <p>Open your heart and home to a friend for life</p>
            </div>
            <div className="carousel__info--end gsap-carousel-2">
              <ButtonA text={"Get Involved"} />
            </div>
          </section>
        </div>
        <div className="carousel__image" id="carousel__image3">
          <FadeInSection target={`.gsap-carousel-3`}>
            <picture>
              <source
                meda="(min-width: 1110px)"
                srcSet={carousel.image3.desktop}
              />
              <source
                meda="(min-width: 688px)"
                srcSet={carousel.image3.tablet}
              />
              <img src={carousel.image3.mobile} />
            </picture>
          </FadeInSection>
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
            <div className="carousel__info--top carousel--center carousel--margin1 gsap-carousel-3">
              <p>Save a life</p>
            </div>
            <div className="carousel__info--middle carousel--center carousel--margin1 gsap-carousel-3">
              <p>And make your life better.</p>
            </div>
            <div className="carousel__info--bottom carousel--center carousel--margin1 gsap-carousel-3 carousel__info--width3">
              <p>Adopt or rescue a shelter pet with our help.</p>
            </div>
            <div className="carousel__info--center gsap-carousel-3">
              <ButtonA text={"Get Involved"} />
            </div>
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
