import React from 'react';
import './App.css';
import { Col, Row } from 'react-bootstrap'

import RightPanel from './components/RightPanel'
import { BoardConnected } from './connected-components'

const App = () =>
  <div className="littleMargin">
    <Row>
      <Col md={8}>
        <BoardConnected/>
      </Col>
      <Col md={4}>
        <RightPanel
          dollar="15"
        />
      </Col>
    </Row>
  </div>;

export default App;

