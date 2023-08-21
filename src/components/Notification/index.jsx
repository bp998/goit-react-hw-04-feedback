import { Component } from 'react';
import css from './Notification.module.css';

class Notification extends Component {
  render() {
    const { isVisible } = this.props;
    return (
      <div
        style={{ marginTop: '16px' }}
        className={isVisible ? '' : css.hidden}
      >
        No feedback given
      </div>
    );
  }
}

export default Notification;
