import "./ButtonB.css";

const ButtonB = ({ text, classes }) => {
  return (
    <button type="button" className={`buttonB ${classes}`}>
      {text}
    </button>
  );
};

export default ButtonB;
