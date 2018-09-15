import React, { Component } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import ReactModal from "react-modal";
import './Welcome.css'
import logo from "../img/logo.png"

class Welcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: true
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return <ReactModal
      isOpen={this.state.showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={this.handleCloseModal}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div>
        <Row>
          <Col md={4}>
            <img src={logo} className="logo" />
          </Col>
          <Col md={8}>
            <h1>Welcome</h1>
            <p>texttexttexttexttexttexttexttexttexttexttext
              texttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
          </Col>
        </Row>
        <Button className="RightBottom" onClick={this.handleCloseModal}>Start Game</Button>
      </div>
    </ReactModal>;
  }
}

export default Welcome;