import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

//Bubble Chart 사용 위한 다른 차트 API
//Demo: https://www.highcharts.com/demo/packed-bubble

const options={
  title: {
    text: "태그 구성"
  },
  series: [{
    
  }]
}

const AdminHomeChart4 = () => {
  return <div>
      <HighchartsReact
      />
  </div>;

};

export default AdminHomeChart4;
