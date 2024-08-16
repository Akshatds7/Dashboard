
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const options = {
    chart: {
      width: 380,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function(val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex]
      }
    },
    title: {
      text: 'Conversation Status Overview  '
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const series = [44, 55, 41, 17, 15];

  return (
    <div>
      <div class ="chart">
        <ReactApexChart options={options} series={series} type="donut" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
