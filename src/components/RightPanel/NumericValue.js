import React from 'react'
import './NumericValue.css'
import { Col, Grid, Row } from 'react-bootstrap'

const NumericValue = props =>
  <div className="numeric-container" style={props.blink ? {borderWidth: '3px', borderColor: 'red'} : null}>
    <Grid className={props.blink ? "blink_me" : ""}>
      <Row>
        <Col md={2}>
          <img src={props.icon} alt={props.value} className="numeric-icon"/>
        </Col>
        <Col md={9}>
          <div className="numeric-value">
            {props.value}
            {props.name ? ` ${props.name}` : ""}
            {props.diff ? ` (Diff.: ${props.diff})` : ""}
          </div>
        </Col>
      </Row>
    </Grid>
  </div>

export default NumericValue;