import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const data = [
  { name: "Page A", pv: 1209 },
  { name: "Page B", pv: 2500 },
  { name: "Page C", pv: 3200 },
  { name: "Page D", pv: 5400 },
  { name: "Page E", pv: 6222 },
  { name: "Page F", pv: 9000 },
  { name: "Page G", pv: 7222 },
];

const HomeChart = () => {
  return (
    <div>
      <h4>비트짱짱</h4>

      <AreaChart
        width={600}
        height={200}
        data={data}
        syncId="anyId"
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </div>
  );
};

export default HomeChart;