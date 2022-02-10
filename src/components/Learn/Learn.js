import "./Learn.css";
import { learn } from "../../data";
import ButtonA from "../buttons/ButtonA/ButtonA";

const Learn = () => {
  return (
    <div className="learn">
      <ul className="learn__items">
        {learn.map((item) => (
          <li key={item.what}>
            <div className="learn__item">
              <div className="learn__what">
                <h1>{item.what}</h1>
              </div>
              <div className="learn__image">
                <img src={item.img} />
              </div>
              <div className="learn__how">
                <p>{item.how}</p>
              </div>
              <div>
                <ButtonA text={`Learn More`} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learn;
