import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const AdminHomeChart1 = () => {
  //Hooks
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["웹사이트", "앱", "쇼핑몰", "iPhone", "Android"],
      datasets: [
        {
          label: "Visitors",
          data: [32, 45, 120, 76, 69],
          //labels data 순서대로 색깔 지정됨
          backgroundColor: [
            "#1f77b4",
            "#ff7f0e",
            "#2ca02c",
            "#17becf",
            "#d7df01",
          ],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div style={{ height: "500px", width: "500px" }}>
      <Doughnut
        data={chartData}
        options={{
          //반응형
          responsive: true,
          title: { text: "Tags", display: true, fontSize: 20 },
        }}
      />
    </div>
  );
};

export default AdminHomeChart1;
