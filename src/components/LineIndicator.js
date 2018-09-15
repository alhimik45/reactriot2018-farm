import React from 'react'
import { Line } from 'rc-progress';
import './LineIndicator.css'

const LineIndicator = props =>
  <div>
    <Line percent={props.count}
          className="line-border"
          strokeColor="#121212"
          trailColor="#eeeeee"
          strokeLinecap="butt"/>
  </div>

export default LineIndicator;