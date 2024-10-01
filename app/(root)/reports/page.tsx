'use client';
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import CountUp from 'react-countup';

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const StatsPage = () => {
  // Dummy data for the charts
  const doughnutData = {
    labels: ['Plastic', 'Metal', 'Paper', 'Wet Waste', 'Dry Waste'],
    datasets: [
      {
        data: [300, 50, 100, 70, 120],
        backgroundColor: ['#4caf50', '#ff9800', '#03a9f4', '#8bc34a', '#f44336'],
        hoverBackgroundColor: ['#66bb6a', '#ffb74d', '#29b6f6', '#aed581', '#e57373'],
      },
    ],
  };

  const lineData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Waste Collected (kg)',
        data: [50, 60, 55, 70, 65, 80, 90],
        fill: false,
        backgroundColor: '#4caf50',
        borderColor: '#4caf50',
      },
    ],
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <div className="ml-40 mb-5 mt-5 w-full max-w-4xl bg-white p-8 shadow-lg rounded-2xl">
        <div>
          <h1 className="text-3xl font-bold font-stacker text-center border-b-1">RAG-ED</h1>
          <p className="text-4xl font-bold font-libre mb-8 text-center">Performance Report</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Waste Items Collected" value={5230} />
          <StatsCard title="Weight of Waste Collected" value={1200} />
          <StatsCard title="Carbon Emissions Reduced" value={320} />
          <StatsCard title="Collection Trips" value={75} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Doughnut Chart for waste breakdown */}
          <div className="p-6 bg-gray-50 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-center">Waste Breakdown</h2>
            <Doughnut data={doughnutData} />
          </div>

          {/* Line Graph for time-based trends */}
          <div className="p-6 bg-gray-50 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-center">Collection Trends</h2>
            <div className="h-72"> {/* Adjust height to reduce whitespace */}
              <Line data={lineData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// StatsCard Component for displaying stats
const StatsCard = ({ title, value }: { title: string; value: number }) => (
  <div className="cursor-pointer flex flex-row items-center bg-gradient-to-b from-green-300 to-green-500 rounded-lg p-1 hover:scale-105 transition-transform duration-200 mt-3 h-40">
    <div className="flex items-center bg-gray-50 rounded-lg p-5 w-full h-full">
      <div className="ml-4 flex-grow">
        <p className="pr-4 min-h-20 text-center font-poppins font-semibold text-xl bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">
          {title}
        </p>
        <p className="mr-5 text-center font-poppins font-bold text-3xl bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">
          <CountUp end={value} duration={2.5} />
        </p>
      </div>
    </div>
  </div>
);

export default StatsPage;
