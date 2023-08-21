import css from './Section.module.css';

const Section = props => {
  const { children, title } = props;
  return (
    <div className={css.feedbackCard}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Section;
