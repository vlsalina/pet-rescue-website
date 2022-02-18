import "../Menu.css";

const HomeMenu = ({ menu }) => {
  let items = ["Right Navigation", "Classic Navigation", "Center Navigation"];

  return (
    <div className={`menu ${menu}`}>
      <ul>
        {items.map((x) => (
          <li key={x}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeMenu;
