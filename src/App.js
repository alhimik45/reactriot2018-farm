import React, { Component } from 'react';
import './App.css';
import { Col, Row } from 'react-bootstrap'
import RightPanel from './components/RightPanel/RightPanel'
import {
  BitcoinValue,
  BoardConnected,
  DashValue,
  DollarsValue,
  EthValue,
  LitecoinValue,
  MegahashValue,
  TradingConnected,
  WelcomeConnected
} from './connected-components'
import FadeMessager from './FadeMessager'

export default class App extends Component {

  render () {
    return <div>
      <FadeMessager/>
      <WelcomeConnected/>
      <TradingConnected/>
      <div className="littleMargin">
        <Row className="values-row">
          <Col md={2}><DollarsValue/></Col>
          <Col md={2}><BitcoinValue/></Col>
          <Col md={2}><LitecoinValue/></Col>
          <Col md={2}><EthValue/></Col>
          <Col md={2}><DashValue/></Col>
          <Col md={2}><MegahashValue/></Col>
        </Row>
        <Row>
          <Col md={8}>
            <BoardConnected/>
          </Col>
          <Col md={4}>
            <RightPanel/>
          </Col>
        </Row>
      </div>
    </div>;
  }
}