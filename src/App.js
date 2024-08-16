import React from 'react';
import './App.css';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import ConversationsChart from './components/ConversationsChart';
import PieChart from './components/PieChart';
import SixMonthsChart from './components/SixMonthsChart';
import FeedbackRatings from './components/FeedbackRatings';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SummaryCards />
        {/* Flexbox container to align charts side by side */}
        <div className="charts-container">
          <div className="chart-item wide">
            <ConversationsChart />
          </div>
          <div className="chart-item narrow">
            <PieChart />
          </div>
        </div>
        <SixMonthsChart />
        <FeedbackRatings />
      </div>
    </div>
  );
}

export default App;
