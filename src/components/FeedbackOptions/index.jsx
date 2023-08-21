import css from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
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
};

export default FeedbackOptions;
