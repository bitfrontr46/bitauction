import React from 'react';
import { Descriptions, Button } from 'antd';

function UploadInfo(props) {
  return (
    <div>
     <Descriptions title="판매자" bordered>
          <Descriptions.Item label="설명">
            {props.detail.profile}
          </Descriptions.Item>
        </Descriptions>
    </div>

   
  );
}

export default UploadInfo;


//prosp.detail.profile
//