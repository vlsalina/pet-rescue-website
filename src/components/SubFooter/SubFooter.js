import "./SubFooter.css";
import { IconContext } from "react-icons/lib";
import { social, links } from "../../data";
import { styles } from "../../styles/styles";

const SubFooter = () => {
  return (
    <div className="subfooter">
      <div>
        <img className="subfooter__logo" src={"/assets/logo/logo_footer.png"} />
      </div>
      <div>
        <ul className="subfooter__links">
          {links.map((x) => (
            <li key={x}>
              <a className="subfooter__link" href="#">
                {x}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="subfooter__social">
          {social.map((x) => (
            <li key={x.media}>
              <a href="#">
                <div className="subfooter--box-1">
                  <IconContext.Provider value={styles.social}>
                    {x.icon}
                  </IconContext.Provider>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="copyrights">
          This is a sample website - cmsmasters © 2022 / All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
