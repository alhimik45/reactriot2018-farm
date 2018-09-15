import React from 'react';
import './App.css';
import { Col, Grid, Row } from 'react-bootstrap'

import Board from './components/Board'
import RightPanel from './components/RightPanel'

const App = () =>
  <div>
    <Grid>
      <Row>
        <Col md={8}>
          <Board/>
        </Col>
        <Col md={4}>
          <RightPanel/>
        </Col>
      </Row>
    </Grid>
  </div>;

export default App;

