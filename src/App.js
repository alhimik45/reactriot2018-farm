import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Col, Row} from 'react-bootstrap'
import ReactModal from 'react-modal'
import RightPanel from './components/RightPanel'
import Welcome from './components/Welcome'
import { BoardConnected } from './connected-components'

ReactModal.setAppElement('#root');

class App extends Component {


    render() {
        return <div>
            <div>
                <Welcome/>
            </div>
            <div className="littleMargin">
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


export default App;

