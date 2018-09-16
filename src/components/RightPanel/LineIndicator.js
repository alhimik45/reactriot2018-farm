import React from 'react'
import { Line } from 'rc-progress';
import './LineIndicator.css'
import { Col, Grid, Row } from 'react-bootstrap'

const LineIndicator = props =>
  <div className="IndicatorHolder">

      <Row>
        <Col md={8}>
          <Row>
          <Col md={10}>
            <img src={props.icon} alt={props.percents} className="line-icon"/>
            <Line percent={props.percents}
                  className="indicator"
                  strokeColor={props.percents > 80 ? "#ee1111"  :"#121212"}
                  trailColor="#eeeeee"
                  strokeLinecap="butt"/>
          </Col>
          </Row>
        </Col>
      </Row>

  </div>

export default LineIndicator;