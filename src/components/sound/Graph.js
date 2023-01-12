import "./Sound.css";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: true,
  },
};

export const data = {
  labels: ["0sec", "15sec", "30sec", "45sec", "60sec"],
  datasets: [
    {
      label: "dB",
      data: [10, 80, 30, 60, 20], //여기다 데이터 넣으면 됨.
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.4,
    },
  ],
};

export default function Graph() {
  return (
    <>
      <div style={{ width: "400px", height: "300px", padding: "20px" }}>
        <Line options={options} data={data} width={400} height={250} />
      </div>
    </>
  );
}
