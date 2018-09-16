import {Col, Row} from "react-bootstrap";
import {
  BitcoinValue,
  DashValue,
  DollarsValue,
  EthValue,
  HeatLine,
  LitecoinValue,
  MegahashValue
} from "../connected-components";
import React from "react";

class CurrentScore extends React.Component {
    render() {
        return <Row className="values-row">
          <Row className="FullWidth">
            <Col md={2}><DollarsValue/></Col>
            <Col md={2}><BitcoinValue/></Col>
            <Col md={2}><LitecoinValue/></Col>
            <Col md={2}><EthValue/></Col>
            <Col md={2}><DashValue/></Col>
            <Col md={2}><MegahashValue/></Col>
          </Row>
          <Row className="FullWidth">
            <HeatLine/>
          </Row>
        </Row>;
    }
}

export default CurrentScore;
