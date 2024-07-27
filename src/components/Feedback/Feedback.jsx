import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>
          <p>Good: {good}</p>
        </li>
        <li className={css.feedbackItem}>
          <p>Neutral: {neutral} </p>
        </li>
        <li className={css.feedbackItem}>
          <p>Bad: {bad} </p>
        </li>
        <li className={css.feedbackItem}>
          <p>Total: {totalFeedback} </p>
        </li>
        <li className={css.feedbackItem}>
          <p>Positiv:{positiveFeedback} %</p>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
