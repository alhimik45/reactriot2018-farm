import React from 'react';
import './App.css';
import { Col, Grid, Row } from 'react-bootstrap'

import Board from './components/Board'
import RightPanel from './components/RightPanel'

const App = () =>
  <div className="littleMargin">
      <Row>
        <Col md={8}>
          <Board/>
        </Col>
        <Col md={4}>
          <RightPanel
            dollar="15"
            fire="55"
            electro="95"
          />
        </Col>
      </Row>
  </div>;

export default App;

