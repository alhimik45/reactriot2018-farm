import React, { Component } from 'react';
import { Col, Row } from "react-bootstrap";
import ReactModal from "react-modal";

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
            <img/>
          </Col>
          <Col md={8}>
            <h1>Welcome</h1>
            <p>texttexttexttexttexttexttexttexttexttexttext
              texttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
          </Col>
        </Row>
        <button className="RightBottom" onClick={this.handleCloseModal}>Start Game</button>
      </div>
    </ReactModal>;
  }
}

export default Welcome;