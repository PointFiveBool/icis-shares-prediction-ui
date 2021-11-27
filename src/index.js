import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { DatePicker, Space } from 'antd';
import SharesForms from './SharesForms';

const { RangePicker } = DatePicker;

ReactDOM.render(
  <div>
    {/* <Space direction="vertical" size={12}>
      <RangePicker />
    </Space> */}
    <SharesForms />

  </div>,
  document.getElementById('root'),
);
