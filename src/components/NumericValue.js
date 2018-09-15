import React from 'react'
import './NumericValue.css'
import { Col, Grid, Row } from 'react-bootstrap'

const NumericValue = props =>
  <div className="numeric-container">
    <Grid>
      <Row>
        <Col md={2}>
          <img src={props.icon} className="numeric-icon"/>
        </Col>
        <Col md={10}>
          <div className="numeric-value">
            {props.value}
          </div>
        </Col>
      </Row>
    </Grid>
  </div>

export default NumericValue;