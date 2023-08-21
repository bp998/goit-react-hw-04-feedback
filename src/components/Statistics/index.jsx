import css from './Statistics.module.css';

const Statistics = props => {
  const {
    good,
    neutral,
    bad,
    countTotalFeedback,
    countPositiveFeedback,
    isVisible,
  } = props;
  return (
    <div className={isVisible ? css.hidden : ''}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback}</p>
      <p>Positive feedback: {countPositiveFeedback}</p>
    </div>
  );
};

export default Statistics;
