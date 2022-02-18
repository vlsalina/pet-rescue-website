import "./CompanionInfo.css";
import { IconContext } from "react-icons/lib";
import { GoSearch } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { styles } from "../../styles/styles";

const CompanionInfo = () => {
  return (
    <div className="companion__info">
      <div className="companion--margin companion__search">
        <a href="#">
          <IconContext.Provider value={styles.mobile}>
            <GoSearch />
          </IconContext.Provider>
        </a>
      </div>
      <div className="companion__divider companion--margin" />
      <div className="companion--margin companion__burger">
        <a href="#">
          <IconContext.Provider value={styles.mobile}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
};

export default CompanionInfo;
