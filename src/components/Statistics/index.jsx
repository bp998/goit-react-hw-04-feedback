import { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const {
      good,
      neutral,
      bad,
      countTotalFeedback,
      countPositiveFeedback,
      isVisible,
    } = this.props;
    return (
      <div className={isVisible ? css.hidden : ''}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {countTotalFeedback}</p>
        <p>Positive feedback: {countPositiveFeedback}</p>
      </div>
    );
  }
}

export default Statistics;

{
  /* <div className={this.isVisible() ? css.hidden : ''}></div> */
}
