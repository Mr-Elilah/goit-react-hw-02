import css from "./Feedback.module.css";
export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total feedback: {totalFeedback}</li>
        <li>Positive feedback: {positiveFeedback}% </li>
      </ul>
    </div>
  );
}
