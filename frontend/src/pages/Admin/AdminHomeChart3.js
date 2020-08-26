import React, { useState, useEffect } from "react";
import { Polar } from "react-chartjs-2";

const AdminHomeChart3 = () => {
  //Hooks
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["1st", "2nd", "3rd", "4th", "5th"],
      datasets: [
        {
          label: "Scale",
          data: [320, 450, 120, 760, 690],
          backgroundColor: [
            "#1f77b4",
            "#ff7f0e",
            "#2ca02c",
            "#17becf",
            "#d7df01",
          ],
          borderWidth: 0,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div style={{ height: "500px", width: "500px" }}>
      <Polar
        data={chartData}
        options={{
          //반응형
          responsive: true,
          title: { text: "Majority", display: true, fontSize: 20 },
        }}
      />
    </div>
  );
};

export default AdminHomeChart3;