import css from "../Options/Options.module.css";

const Button = ({ title, updateFeedback, value }) => {
  return (
    <>
      <button
        className={css.optionsBtn}
        onClick={() => updateFeedback(value)}
        type="button"
      >
        {title}
      </button>
    </>
  );
};

export default Button;
