import React from 'react';
import './App.css';
import LineIndicator from './components/LineIndicator'
import { Col, Grid, Row } from 'react-bootstrap'

const App = () =>
  <div>
    <Grid>
      <Row>
        <Col md={8}>

        </Col>
        <Col md={4}>
          <LineIndicator count={32}/>
        </Col>
      </Row>
    </Grid>
  </div>;

export default App;

