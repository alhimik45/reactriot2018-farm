import React from 'react'
import './NumericValue.css'
import { Col, Grid, Row } from 'react-bootstrap'

const NumericValue = props =>
  <div className="numeric-container">
    <Grid>
      <Row>
        <Col md={2}>
          <img src={props.icon} alt={props.value} className="numeric-icon"/>
        </Col>
        <Col md={9}>
          <div className="numeric-value">
            {props.value}
            {props.diff ? ` (Diff.: ${props.diff})` : ""}
          </div>
        </Col>
      </Row>
    </Grid>
  </div>

export default NumericValue;