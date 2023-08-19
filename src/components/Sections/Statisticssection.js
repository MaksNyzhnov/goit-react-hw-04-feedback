import PropTypes from 'prop-types';
import css from './Section.module.css';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const StatisticsSection = ({ title, feedbacks }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>

      {feedbacks.good === 0 &&
      feedbacks.bad === 0 &&
      feedbacks.neutral === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics feedbacks={feedbacks} />
      )}
    </section>
  );
};

StatisticsSection.propTypes = {
  title: PropTypes.string.isRequired,
};
export default StatisticsSection;
