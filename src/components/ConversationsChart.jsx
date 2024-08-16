import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const ConversationsChart = () => {
  const [view, setView] = useState('week');

  const handleChange = (e) => {
    setView(e.target.value);
  };

  const options = {
    chart: {
      height: 350,
      type: 'line'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: view === 'day' ? 
        ["2024-08-05", "2024-08-06", "2024-08-07", "2024-08-08", "2024-08-09", "2024-08-10", "2024-08-11"] :
        view === 'week' ? 
        ["Week 28", "Week 29", "Week 30", "Week 31", "Week 32"] :
        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
    }
  };

  const series = [
    {
      name: 'Conversations',
      data: view === 'day' ? [10, 41, 35, 51, 49, 62, 69] :
             view === 'week' ? [0, 9, 0, 0, 1] :
             [10, 20, 30, 40, 50, 60, 70, 80]
    }
  ];

  return (
    <div className="conversations-chart">
      <h2>Conversations Handled By Bot</h2>
      <select onChange={handleChange} value={view}>
        <option value="day">Daily</option>
        <option value="week">Weekly</option>
        <option value="month">Monthly</option>
      </select>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default ConversationsChart;


