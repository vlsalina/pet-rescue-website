import "../Menu.css";

const ShortcodesMenu = ({ menu }) => {
  const items = [
    "Toggles & Accordions",
    "Tabs & Tours",
    "Quotes",
    "Icon Lists",
    "Icon Boxes",
    "Special Headings",
    "Posts or Projects Slider",
    "Clients",
    "Dividers",
    "Images",
    "Google Maps",
    "Featured Blocks",
    "Tables",
    "Blog Shortcode",
    "Notice Boxes",
    "Counters & Progress Bars",
    "Buttons & Icons",
    "Social Sharing",
    "Gallery",
    "Portfolio Shortcode",
    "Embedded",
    "Custom HTML, CSS< JS",
    "Sidebar",
    "Sliders",
    "Profiles",
    "Pricing Tables",
    "Tweets",
  ];

  return (
    <div className={`menu ${menu}`}>
      <ul>
        {items.slice(0, 7).map((x) => (
          <li key={x}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>
      <ul>
        {items.slice(7, 14).map((x) => (
          <li key={x}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>
      <ul>
        {items.slice(14, 20).map((x) => (
          <li key={x}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>
      <ul>
        {items.slice(21, 27).map((x) => (
          <li key={x}>
            <a href="#">{x}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShortcodesMenu;
