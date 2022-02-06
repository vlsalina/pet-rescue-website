import "./ButtonA.css";

const ButtonA = ({ text }) => {
  return (
    <a className="buttonA" href="#">
      <span>{text}</span>
    </a>
  );
};

export default ButtonA;
