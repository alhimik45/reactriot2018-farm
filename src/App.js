import React from 'react';
import './App.css';
import { Col, Grid, Row } from 'react-bootstrap'
import electro from './img/electro.svg'
import { ElectroLine } from './connected-components'

const App = () =>
  <div>
    <Grid>
      <Row>
        <Col md={8}>

        </Col>
        <Col md={4}>
          <ElectroLine icon={electro}/>
        </Col>
      </Row>
    </Grid>
  </div>;

export default App;

