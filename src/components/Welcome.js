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
          <Col md={3}>
            <img src={logo} className="logo" alt="logo"/>
            <div>Used icon packs <b>Business Collection, Pc components, Technology Elements and Crypto currency</b> made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            <div>Pick and DollarSign icons from <a href="https://github.com/twitter/twemoji" title="Twemoji">Twemoji</a> licensed under <a href="https://creativecommons.org/licenses/by/4.0/" title="CC-BY 4.0">CC-BY 4.0</a></div>
          </Col>
          <Col md={8}>
            <h1>Welcome</h1>
            <p>Hello! This is simple clicker game "Happy Mining Farm" :)</p>
            <p>Place some mining equipment on board and click on generated coins!</p>
            <p>
              Trade your mined currency in stock exchange
              <img src={exchangehelp} alt="help"/>
            </p>
            <p>
              Some equipment can change its currency for mining. Just click several times on currency icon in the corner (not about ASICs)
              <img className="Block" src={gpuhelp} alt="help"/>
            </p>
            <p>
              Watch out of overheat! When you get an overheat, your equipment will lose its power
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