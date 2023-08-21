import css from './Notification.module.css';

const Notification = props => {
  const { isVisible } = props;
  return (
    <div style={{ marginTop: '16px' }} className={isVisible ? '' : css.hidden}>
      No feedback given
    </div>
  );
};

export default Notification;
