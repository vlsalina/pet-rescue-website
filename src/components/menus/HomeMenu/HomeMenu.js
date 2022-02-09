import "./HomeMenu.css";
import { navMenu } from "../../../data";

const HomeMenu = () => {
  let items = navMenu.slice(1, 4);

  return (
    <div className="homeMenu">
      <ul>
        {items.map((x, index) => (
          <li key={index}>
            <a href="#">{x.item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeMenu;
