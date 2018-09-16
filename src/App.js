import React, { Component } from 'react';
import './App.css';
import { Col, Row } from 'react-bootstrap'
import RightPanel from './components/RightPanel/RightPanel'
import Trading from './components/Trading'
import { BoardConnected, WelcomeConnected } from './connected-components'
import FadeMessager from './FadeMessager'

export default class App extends Component {

    render () {
        return <div>
            <FadeMessager/>
            <div>
                <WelcomeConnected/>
            </div>
            <div>
                <Trading/>
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