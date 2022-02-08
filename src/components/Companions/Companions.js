import "./Companions.css";
import { companions } from "../../data";

const Companions = () => {
  return (
    <section className="companions">
      <div className="companions__heading">
        <h2>Are you looking for a new companion?</h2>
      </div>
      <div className="companions__description">
        <h5>View our featured pets and all our animals ready for adoption!</h5>
      </div>
      <div className="companions__list">
        {companions.map((co) => (
          <div className="companion__featured" key={co.name}>
            <div className="companion__image">
              <img src={co.img} />
            </div>
            <div className="companion__name">
              <a href="#">{co.name}</a>
            </div>
            <summary className="companion__story">
              <p>{co.story}</p>
            </summary>
          </div>
        ))}
      </div>
      <div className="companion__more">
        <a href="#">View all our adorable pets >></a>
      </div>
    </section>
  );
};

export default Companions;
