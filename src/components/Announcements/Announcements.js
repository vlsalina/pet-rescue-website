import "./Announcements.css";
import { recent } from "../Learn/data";
import News from "../News/News";
import Events from "../Events/Events";

const Announcements = () => {
  return (
    <div className="announcements">
      <News />
      <Events />
    </div>
  );
};

export default Announcements;
