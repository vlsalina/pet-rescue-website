import "./ButtonA.css";

const ButtonA = ({ text }) => {
  return (
    <a className="buttonA">
      <span>{text}</span>
    </a>
  );
};

export default ButtonA;
