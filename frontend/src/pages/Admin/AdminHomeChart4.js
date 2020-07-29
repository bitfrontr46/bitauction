//Bubble Chart 사용 위한 다른 차트 API(Highcharts)
// 참고: https://www.highcharts.com/docs/chart-and-series-types/packed-bubble
import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import BubbleChart from "../../components/AdminComponents/BubbleChart";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/highcharts-more")(Highcharts);

const chartOptions = {
  chart: {
    type: "packedbubble",
    height: "50%",
  },
  title: {
    text: "Tag별 분포",
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}:</b> {point.value}",
  },
  plotOptions: {
    packedbubble: {
      minSize: "50",
      maxSize: "300",
      // zMin: 0,
      // zMax: 1000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.02,
      },
      dataLabels: {
        enabled: true,
        format: "{series.name}",
        filter: {
          property: "y",
          operator: ">",
          value: 250,
        },
        style: {
          color: "black",
          textOutline: "none",
          fontWeight: "normal",
        },
      },
    },
  },
  series: [
    {
      name: "iOS",
      data: [
        {
          name: "iOS",
          value: 880,
        },
      ],
    },
    {
      name: "Android",
      data: [
        {
          name: "Android",
          value: 605,
        },
      ],
    },
    {
      name: "Web",
      data: [
        {
          name: "Web",
          value: 427,
        },
      ],
    },
    {
      name: "모바일",
      data: [
        {
          name: "모바일",
          value: 355,
        },
      ],
    },
    {
      name: "홈페이지",
      data: [
        {
          name: "홈페이지",
          value: 956,
        },
      ],
    },
  ],
};

const AdminHomeChart4 = () => (
  <div>
    <h1>Demos</h1>

    <h2>Highcharts</h2>
    <BubbleChart options={chartOptions} highcharts={Highcharts} />
  </div>
);

render(<AdminHomeChart4 />, document.getElementById("root"));

export default AdminHomeChart4;
