import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = ({ data, labels }) => { 
  console.log(data)
  console.log(labels)
  const chartData = {
    labels: data.map((item)=>item.x),
    datasets: [
      {
        label: 'Data',
        data:  data.map((item)=>item.y),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineGraph;
