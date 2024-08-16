import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SixMonthsChart = () => {
  const options = {
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
      text: 'Conversations Last Six Months'
    },
    yaxis: {
      stepSize: 20
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
  };

  const series = [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }];

  return (
    <div className="six-months-chart">
      <ReactApexChart options={options} series={series} type="radar" height={350} />
      <div id="html-dist"></div>
    </div>
  );
};

export default SixMonthsChart;
