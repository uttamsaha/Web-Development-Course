import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import './Dashboard.css'

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="dashboard">
      <div className="chart">
        <div className="charts-container">
          <div className="line-chart">
            <LineChart width={600} height={400} data={data}>
              <XAxis dataKey="month" />
              <YAxis dataKey="sell"></YAxis>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="investment" stroke="#8884d8" />
              <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
              <Tooltip></Tooltip>
            </LineChart>
          </div>
          <div>
            <BarChart
              width={600}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#8884d8" />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </div>

          <div>
            <h2>Investment VS Revenue</h2>
            <PieChart width={600} height={400}>
              <Pie
                data={data}
                dataKey="investment"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="revenue"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label
              />
              <Tooltip></Tooltip>
            </PieChart>
          </div>

          <div>
            <h2>Investment VS Revenue</h2>
            <AreaChart
              width={600}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month"></XAxis>
              <YAxis dataKey="revenue" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="sell"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Legend></Legend>
            </AreaChart>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
