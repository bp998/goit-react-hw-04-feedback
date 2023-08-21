import Statistics from 'components/Statistics';
import css from './Feedback.module.css';
import React, { useState } from 'react';
import Notification from 'components/Notification';
import FeedbackOptions from 'components/FeedbackOptions';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const isVisible = () => {
    return countTotalFeedback() === 0;
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return countTotalFeedback()
      ? `${((good / countTotalFeedback()) * 100).toFixed(0)}%`
      : `0%`;
  };

  return (
    <div className={css.feedback}>
      <FeedbackOptions
        options={['good', 'bad', 'neutral']}
        onLeaveFeedback={handleClick}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        countTotalFeedback={countTotalFeedback()}
        countPositiveFeedback={countPositiveFeedback()}
        isVisible={isVisible()}
      />

      <Notification isVisible={isVisible()} />
    </div>
  );
};

export default Feedback;
