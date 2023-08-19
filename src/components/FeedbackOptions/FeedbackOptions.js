import React from 'react';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ updateState }) => {
  const onButtonClick = event => {
    updateState(`${event.target.textContent.toLowerCase()}`);
  };

  return (
    <ul className={css.feedback__list}>
      <li className={css.feedback__list__item}>
        <button
          type="button"
          className={css.feedback__button}
          onClick={onButtonClick}
        >
          Good
        </button>
      </li>
      <li className={css.feedback__list__item}>
        <button
          type="button"
          className={css.feedback__button}
          onClick={onButtonClick}
        >
          Neutral
        </button>
      </li>
      <li className={css.feedback__list__item}>
        <button
          type="button"
          className={css.feedback__button}
          onClick={onButtonClick}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
