import React, { useState } from 'react';

import FeedbackSection from './Sections/Feedbacksection';

import StatisticsSection from './Sections/Statisticssection';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateState = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  return (
    <div>
      <FeedbackSection
        title="Please leave feedback"
        updateState={updateState}
      ></FeedbackSection>

      <StatisticsSection
        title="Statistics"
        feedbacks={{ good, bad, neutral }}
      ></StatisticsSection>
    </div>
  );
};

export default App;
