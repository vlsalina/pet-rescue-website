import "../Menu.css";

const PetsMenu = ({ menu }) => {
  const items = ["All Pets", "Adoptable Dogs", "Adoptable Cats"];

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

export default PetsMenu;
