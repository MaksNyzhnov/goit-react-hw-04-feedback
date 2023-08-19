import React from 'react';
import css from './Notification.module.css';
class Notification extends React.Component {
  render() {
    return <p className={css.notification__text}>{this.props.message}</p>;
  }
}
export default Notification;
