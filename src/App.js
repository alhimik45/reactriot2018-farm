import React, {Component} from 'react';
import './App.css';
import {Col, Row} from 'react-bootstrap'
import ReactModal from 'react-modal';
import Board from './components/Board'
import RightPanel from './components/RightPanel'
import Welcome from './components/Welcome'

ReactModal.setAppElement('#root');

class App extends Component {


    render() {
        return <div>
            <div>
                {/*<button onClick={this.handleOpenModal}>Trigger Modal</button>*/}
                <Welcome/>
            </div>
            <div className="littleMargin">
                <Row>
                    <Col md={8}>
                        <Board/>
                    </Col>
                    <Col md={4}>
                        <RightPanel
                            dollar="15"
                        />
                    </Col>
                </Row>
            </div>
        </div>;
    }
}


export default App;