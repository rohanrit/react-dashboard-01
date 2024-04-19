import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    const barColors = [
      "rgba(255,99,132)",
      "rgba(255,159,64)",
      "rgba(255,205,86)",
      "rgba(75,192,192)",
      "rgba(54,162,235)",
    ];
    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
        datasets: [
          {
            label: "Data",
            data: [12, 19, 8, 4, 8],
            backgroundColor: barColors,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              color: "rgb(255, 99, 132)",
            },
          },
        },
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;
