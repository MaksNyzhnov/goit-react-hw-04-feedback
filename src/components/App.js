import React from 'react';

import FeedbackSection from './Sections/Feedbacksection';

import StatisticsSection from './Sections/Statisticssection';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateState = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  render() {
    return (
      <div>
        <FeedbackSection
          title="Please leave feedback"
          updateState={this.updateState}
        ></FeedbackSection>

        <StatisticsSection
          title="Statistics"
          feedbacks={this.state}
        ></StatisticsSection>
      </div>
    );
  }
}

export default App;
