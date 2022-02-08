import "./Header.css";
import { navigation, social } from "../../data";
import { IconContext } from "react-icons/lib";
import { styles } from "../../styles/styles";
import ButtonB from "../buttons/ButtonB/ButtonB";
import ButtonC from "../buttons/ButtonC/ButtonC";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="header">
      <div className="header--box-4">
        <div className="header--box-1">
          <img src="/assets/logo/logo_footer.png" />
        </div>
        <div className="header--box-2">
          <ul className="header__social">
            {social.map((x) => (
              <li key={x.media}>
                <a href="#">
                  <div className="header__link">
                    <IconContext.Provider value={styles.socialMenuTop}>
                      {x.icon}
                    </IconContext.Provider>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="header--box-3">
        <ul className="header__navigation">
          {navigation.map((x, index) => (
            <li key={x}>
              <div className="header--box-4">
                {index === 0 ? <ButtonB text={x} /> : <ButtonC text={x} />}
                {index === 0 ? (
                  <div />
                ) : index === navigation.length - 1 ? (
                  <div />
                ) : (
                  <div className="divider" />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="header__mobile-menu">
        <div className="header__mobile-item header__mobile--margin">
          <IconContext.Provider value={styles.mobile}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </div>
        <div className="header__mobile-item">
          <IconContext.Provider value={styles.mobile}>
            <FaShoppingCart />
          </IconContext.Provider>
        </div>
      </div>
    </header>
  );
};

export default Header;
