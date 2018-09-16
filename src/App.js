import React, { Component } from 'react';
import './App.css';
import { Col, Row } from 'react-bootstrap'
import RightPanel from './components/RightPanel/RightPanel'
import { BoardConnected, CurrentScoreConnected, WelcomeConnected } from './connected-components'
import FadeMessager from './FadeMessager'
import { withAlert } from 'react-alert'

class App extends Component {

  render () {
    return <div>
      <FadeMessager/>
      <WelcomeConnected/>
      <div className="littleMargin">
        <CurrentScoreConnected/>
        <Row>
          <Col md={8}>
            <BoardConnected/>
          </Col>
          <Col md={4}>
            <RightPanel/>
          </Col>
        </Row>
      </div>
    </div>
  }
}

export default withAlert(App);