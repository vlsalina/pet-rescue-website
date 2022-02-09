import "../Menu.css";

const PostTypesMenu = ({ menu }) => {
  const projectGrid = ["PROJECT GRID", "Large Gap", "1Pixel Gap", "No Gap"];

  const massonryPuzzle = [
    "MASSONRY PUZZLE",
    "Large Gap",
    "1Pixel Gap",
    "No Gap",
  ];

  const blog = ["BLOG", "Standard Blog", "Masonry Blog", "Timeline Blog"];

  const profiles = ["PROFILES", "Horizontal", "Vertical", "Open Profile"];

  const events = ["EVENTS", "Photo", "Month", "Map"];

  return (
    <div className={`menu ${menu.replace(/\s/g, "")}`}>
      <ul>
        {projectGrid.map((x) => (
          <li key={x}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>
      <ul>
        {massonryPuzzle.map((x) => (
          <li key={x}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>
      <ul>
        {blog.map((x) => (
          <li key={x}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>
      <ul>
        {profiles.map((x) => (
          <li key={x}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>
      <ul>
        {events.map((x) => (
          <li key={x}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostTypesMenu;
