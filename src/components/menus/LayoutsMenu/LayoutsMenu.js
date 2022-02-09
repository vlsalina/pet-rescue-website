import "../Menu.css";

const LayoutsMenu = ({ menu }) => {
  const items = [
    "About Us",
    "Adoption Info",
    "Adoption Fees",
    "Donation",
    "Typography",
  ];

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

export default LayoutsMenu;
