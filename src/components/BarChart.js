import React from "react";
import {PieChart, Pie, Tooltip} from "recharts"
import './BarChart.css'

const BarChart = () => {

  const user = [
    { name: "Facebook", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 500000000 },
  ];

  return (
    <div className="chart">
        <h2>Top Users</h2>
        <PieChart width={400} height={200} >
        <Pie
        
        dataKey='value'
        isAnimationActive={false}
        data={user}
        cx={100}
        cy={100}
        outerRadius={80}
        fill='blue'
        />
        <Tooltip />
        </PieChart>
    </div>
  );
};

export default BarChart;