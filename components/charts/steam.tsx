import React from "react";
import Chart, { Props } from "react-apexcharts";

const seriesData: Props["series"] = [
  {
    name: "Suspicious Transactions",
    data: [25, 35, 28, 45, 60, 80, 75], // Increased values to represent higher number of suspicious transactions
  },
  {
    name: "High-Risk Transactions",
    data: [15, 20, 30, 25, 35, 45, 50], // Increased values to represent higher number of high-risk transactions
  },
  {
    name: "Alerts Generated",
    data: [18, 40, 35, 55, 70, 90, 85], // Increased values to represent higher number of alerts
  },
];

const chartOptions: Props["options"] = {
  chart: {
    type: "area",
    animations: {
      easing: "easeinout",
      speed: 500,
    },
    id: "aml-fraud-monitoring",
    foreColor: "#f0f0f0", // Light gray color for better readability on a dark background
    toolbar: {
      show: true,
    },
    background: "#333", // Dark background color
  },
  xaxis: {
    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], // More descriptive labels
    labels: {
      style: {
        colors: "#f0f0f0",
      },
    },
    axisBorder: {
      color: "#666",
    },
    axisTicks: {
      color: "#666",
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#f0f0f0",
      },
    },
    title: {
      text: "Count of Transactions / Alerts",
      style: {
        color: "#b0b0b0",
      },
    },
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    x: {
      show: true,
    },
    y: {
      formatter: (val) => `${val} events`, // Shows event count in tooltip
    },
  },
  grid: {
    borderColor: "#666",
    strokeDashArray: 5, // Dashed grid lines for better readability
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.3,
      opacityTo: 0.7,
      stops: [0, 90, 100],
    },
  },
  markers: {
    size: 5,
    colors: ["#FFA500", "#FF6347", "#1E90FF"], // Distinct colors for each data point
  },
  colors: ["#FFA500", "#FF6347", "#1E90FF"], // Orange, red, and blue for differentiation
};

export const Steam = () => {
  return (
    <div className="w-full z-20 bg-gray-800 p-4">
      <div id="chart">
        <Chart options={chartOptions} series={seriesData} type="area" height={425} />
      </div>
    </div>
  );
};