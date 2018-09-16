import React, { Component } from 'react'
import { Button, Col, Row } from "react-bootstrap"
import ReactModal from "react-modal"
import './Welcome.css'
import logo from "../img/logo.png"
import gpuhelp from "../img/gpu-help.png"
import exchangehelp from "../img/exchange-help.png"
import overheathelp from "../img/heat-help.png"
class Welcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: true
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    this.setState({ showModal: true })
  }

  handleCloseModal () {
    this.props.startGame()
    this.setState({ showModal: false })
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
            <img src={logo} className="logo" alt="logo"/>
          </Col>
          <Col md={8}>
            <h1>Welcome</h1>
            <p>Hello! This is simple clicker game "Happy Mining Farm" :)</p>
            <p>Place some mining equipment on board, click on generated coins!</p>
            <p>
              Trade your mined currency in stock exchange
              <img src={exchangehelp} alt="help"/>
            </p>
            <p>
              Some equipment can change its currency for mining. Just click several times on currency icon in the corner
              <img className="Block" src={gpuhelp} alt="help"/>
            </p>
            <p>
              Watch out of overheat! When you gen an overheat, your equipment will lost its power
              <img src={overheathelp} alt="help"/>
            </p>
          </Col>
        </Row>
        <Button className="RightBottom" onClick={this.handleCloseModal}>Start Game</Button>
      </div>
    </ReactModal>
  }
}

export default Welcome