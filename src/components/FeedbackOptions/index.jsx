import { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        <ul className={css.buttons}>
          {options.map((option, index) => (
            <li key={index}>
              <button
                className={css.button}
                type="button"
                name={option}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FeedbackOptions;
