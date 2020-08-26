import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const AdminHomeChart1 = () => {
  //Hooks
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["mon", "tue", "wed", "thu", "fri"],
      datasets: [
        {
          label: "Visitors",
          data: [32, 45, 120, 76, 69],
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
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
      <Line
        data={chartData}
        options={{
          //반응형
          responsive: true,
          title: { text: "Daily Visitors", display: true, fontSize: 20 },

          scales: {
            //y축 설정
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  //y축 단위의 최대 갯수, 보통 자동으로 설정됨
                  maxTicksLimit: 15,
                  //0부터 시작?
                  beginAtZero: true,
                },
                //가로선 설정
                gridLines: {
                  display: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default AdminHomeChart1;
