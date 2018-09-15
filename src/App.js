import React, {Component} from 'react';
import './App.css';
import {Col, Row} from 'react-bootstrap'
import ReactModal from 'react-modal';
import Board from './components/Board'
import RightPanel from './components/RightPanel'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        const movingObjectWidth = (this.movingObject.current && this.movingObject.current.offsetWidth) || 0
        const movingObjectHeight = (this.movingObject.current && this.movingObject.current.offsetHeight) || 0
        const {x, y} = this.props.position;

        let left = x - movingObjectWidth / 2
        let top = y - movingObjectHeight / 2

        if (left < 0 || left + movingObjectWidth > this.props.elementDimensions.width)
            left = this.lastLeft
        if (top < 0 || top + movingObjectHeight > this.props.elementDimensions.height)
            top = this.lastTop
        this.lastLeft = left
        this.lastTop = top

        return
            <div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example" >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
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
            </div>
        ;
    }
}


export default App;


