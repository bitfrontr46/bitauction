import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import HomeChart2 from "./AdminHomeChart2";
//chart
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
//차트 1 - 그래프
//HomeChart1은 사실상 백업. 다 여기에 추가됨
const graphChartData = [
  { name: "Page A", pv: 1209 },
  { name: "Page B", pv: 2500 },
  { name: "Page C", pv: 3200 },
  { name: "Page D", pv: 5400 },
  { name: "Page E", pv: 6222 },
  { name: "Page F", pv: 9000 },
  { name: "Page G", pv: 7222 },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const AdminHome = () => {
  const classes = useStyles();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <HomeChart2 />
        <div className={classes.paper}></div>
      </Container>

      {/* 그래프 차트 */}
      <h4> 비트짱짱</h4>
      <AreaChart
        width={600}
        height={200}
        data={graphChartData}
        syncId="anyId"
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>


    </>
  );
};

export default AdminHome;
