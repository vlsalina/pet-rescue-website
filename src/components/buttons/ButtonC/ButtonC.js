import "./ButtonC.css";

const ButtonC = ({ text }) => {
  return (
    <button type="button" className={`buttonC ${text.replace(/\s/g, "")}-flag`}>
      {text}
    </button>
  );
};

export default ButtonC;
