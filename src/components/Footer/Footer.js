import "./Footer.css";
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import {
  antiCrueltySociety,
  spayAndNeuterClinic,
  trainingYourPet,
  adoptionInformation,
} from "../Learn/data";
import { styles } from "../../styles/styles";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--box-1">
        <div>
          <h5 className="footer__heading">The Anti Cruelty Society</h5>
        </div>
        <ul className="footer__info">
          {antiCrueltySociety.map((x) => (
            <li key={x}>
              <a className="footer__link" href="#">
                <IconContext.Provider value={styles.arrow2}>
                  <IoIosArrowForward />
                </IconContext.Provider>
                <span className="footer--text">{x}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer--box-1">
        <div>
          <h5 className="footer__heading">Spay/Neuter Clinic</h5>
        </div>

        <ul className="footer__info">
          {trainingYourPet.map((x) => (
            <li key={x}>
              <a className="footer__link" href="#">
                <IconContext.Provider value={styles.arrow2}>
                  <IoIosArrowForward />
                </IconContext.Provider>
                <span className="footer--text">{x}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer--box-1">
        <div>
          <h5 className="footer__heading">Training Your Pet</h5>
        </div>

        <ul className="footer__info">
          {adoptionInformation.map((x) => (
            <li key={x}>
              <a className="footer__link" href="#">
                <IconContext.Provider value={styles.arrow2}>
                  <IoIosArrowForward />
                </IconContext.Provider>
                <span className="footer--text">{x}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer--box-1">
        <div>
          <h5 className="footer__heading">Adoption Information</h5>
        </div>

        <ul className="footer__info">
          {antiCrueltySociety.map((x) => (
            <li key={x}>
              <a className="footer__link" href="#">
                <IconContext.Provider value={styles.arrow2}>
                  <IoIosArrowForward />
                </IconContext.Provider>
                <span className="footer--text">{x}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
