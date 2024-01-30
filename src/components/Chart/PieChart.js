import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ data, labels, chartId }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Destroy previous chart before creating a new one
    const previousChart = Chart.getChart(chartRef.current);
    if (previousChart) {
      previousChart.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              "#3fcd3f",
              "#9fd49f",
              "rgba(0, 255, 0, 0.6)",
              "rgba(50, 205, 50, 0.6)",
              "#97f89b",
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
      },
    });
  }, [data, labels]);

  return <canvas ref={chartRef} id={chartId} />;
};

export default PieChart;
