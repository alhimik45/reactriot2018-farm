import {BoardConnected, CurrentScoreConnected} from "../connected-components";
import {Col, Row} from "react-bootstrap";
import RightPanel from "./RightPanel/RightPanel";
import React from "react";
import CurrentScore from './CurrentScore'

export default class Content extends React.Component {
    render() {
        return <div className="littleMargin">
            <CurrentScore/>
            <Row>
                <Col md={8}>
                    <BoardConnected/>
                </Col>
                <Col md={4}>
                    <RightPanel/>
                </Col>
            </Row>
        </div>;
    }
}