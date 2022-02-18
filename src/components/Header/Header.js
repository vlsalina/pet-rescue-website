import React, { useState, useEffect } from "react";
import "./Header.css";
import { navigation, social } from "../../data";
import { IconContext } from "react-icons/lib";
import { styles } from "../../styles/styles";
import ButtonB from "../buttons/ButtonB/ButtonB";
import ButtonC from "../buttons/ButtonC/ButtonC";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "../NavMenu/NavMenu";
import { toggleNavMenu, toggleHomeMenu } from "../../utils";
import HomeMenu from "../menus/HomeMenu/HomeMenu";
import PetsMenu from "../menus/PetsMenu/PetsMenu";
import LayoutsMenu from "../menus/LayoutsMenu/LayoutsMenu";
import ShortcodesMenu from "../menus/ShortcodesMenu/ShortcodesMenu";
import PostTypesMenu from "../menus/PostTypes/PostTypes";

const Header = () => {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    navigation.forEach((x) => {
      toggleHomeMenu(x);
    });
  }, []);

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
                {x === "home" && <HomeMenu menu={x} />}
                {x === "pets" && <PetsMenu menu={x} />}
                {x === "layouts" && <LayoutsMenu menu={x} />}
                {x === "post types" && <PostTypesMenu menu={x} />}
                {x === "shortcodes" && <ShortcodesMenu menu={x} />}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="header__mobile-menu">
        <button
          className="header__mobile-item header__mobile--margin"
          onClick={() => toggleNavMenu(flag, setFlag)}
        >
          <IconContext.Provider value={styles.mobile}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </button>
        <button
          className="header__mobile-item"
          onClick={() => toggleNavMenu(flag, setFlag)}
        >
          <IconContext.Provider value={styles.mobile}>
            <FaShoppingCart />
          </IconContext.Provider>
        </button>
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;
