import React from 'react'
import { Line } from 'rc-progress';
import './LineIndicator.css'
import { Col, Grid, Row } from 'react-bootstrap'

const LineIndicator = props =>
  <div>
    <Grid>
      <Row>
        <Col md={2}>
          <img src={props.icon} className="line-icon"/>
        </Col>
        <Col md={10}>
          <Line percent={props.percents}
                className="line-border"
                strokeColor="#121212"
                trailColor="#eeeeee"
                strokeLinecap="butt"/>
        </Col>
      </Row>
    </Grid>
  </div>

export default LineIndicator;