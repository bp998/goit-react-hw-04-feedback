import Statistics from 'components/Statistics';
import css from './Feedback.module.css';
import React, { Component } from 'react';
import Notification from 'components/Notification';
import FeedbackOptions from 'components/FeedbackOptions';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  isVisible = () => {
    return this.countTotalFeedback() === 0;
  };

  countTotalFeedback = () => {
    const value = this.state.good + this.state.neutral + this.state.bad;
    return value;
  };

  countPositiveFeedback = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;
    return total ? `${((this.state.good / total) * 100).toFixed(0)}%` : `0%`;
  };

  render() {
    return (
      <div className={css.feedback}>
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={this.handleClick}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedback={this.countPositiveFeedback()}
          isVisible={this.isVisible()}
        />

        <Notification isVisible={this.isVisible()} />
      </div>
    );
  }
}

export default Feedback;
