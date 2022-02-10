import FadeInSection from "../FadeInSection/FadeInSection";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <header>
        <h6 className="sponsors__header">
          Thank you to our partners whose support makes our work possible
        </h6>
      </header>
      <div>
        <FadeInSection target={`.sponsors__partner`}>
          <ul className="sponsors__partners">
            <li>
              <img
                className="sponsors__partner"
                src={"/assets/supporters/cat-lovers.jpg"}
              />
            </li>
            <li>
              <img
                className="sponsors__partner"
                src={"/assets/supporters/happy-cat.jpg"}
              />
            </li>
            <li>
              <img
                className="sponsors__partner"
                src={"/assets/supporters/hedgehog.jpg"}
              />
            </li>
            <li>
              <img
                className="sponsors__partner"
                src={"/assets/supporters/pet-care.jpg"}
              />
            </li>
            <li>
              <img
                className="sponsors__partner"
                src={"/assets/supporters/pet-shop.jpg"}
              />
            </li>
          </ul>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Sponsors;
