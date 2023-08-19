import PropTypes from 'prop-types';
import css from './Section.module.css';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

const FeedbackSection = ({ title, updateState }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      <FeedbackOptions updateState={updateState} />
    </section>
  );
};

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FeedbackSection;
