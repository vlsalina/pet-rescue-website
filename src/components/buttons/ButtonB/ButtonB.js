import "./ButtonB.css";

const ButtonB = ({ text }) => {
  return (
    <button type="button" className={`buttonB ${text}-flag`}>
      {text}
    </button>
  );
};

export default ButtonB;
