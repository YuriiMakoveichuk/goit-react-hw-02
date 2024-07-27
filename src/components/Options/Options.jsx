import Button from "../Button/Button";

import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={css.options}>
      <Button value="good" title={"Good"} updateFeedback={updateFeedback} />
      <Button
        value="neutral"
        title={"Neutral"}
        updateFeedback={updateFeedback}
      />
      <Button value="bad" title={"Bad"} updateFeedback={updateFeedback} />
      {totalFeedback > 0 && (
        <button
          className={css.optionsBtn}
          value="reset"
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
