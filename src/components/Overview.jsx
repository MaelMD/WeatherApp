import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false,
    },
    title: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Change to your desired color for vertical lines
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)', // Change the tick labels color as needed
        }
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)', // Change to your desired color for horizontal lines
      },
      ticks: {
        // Include a percent sign in the ticks
        callback: function(value) {
          return `${value}%`;
        }
      }
    }
  }
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.random() * 100),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.4
    },
  ],
};

export function OverviewChart() {
  return <Line options={options} data={data} />;
}


export default function Overview() {
    return (
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Overview</h2>
          <div>
            <button className="bg-gray-700 hover:bg-gray-600 text-sm px-3 py-1 rounded">Humidity</button>
            <button className="bg-gray-700 hover:bg-gray-600 text-sm px-3 py-1 rounded">Rainfall</button>
            <button className="bg-gray-700 hover:bg-gray-600 text-sm px-3 py-1 rounded">Pressure</button>
          </div>
        </div>
        <OverviewChart />
      </div>
    );
  }