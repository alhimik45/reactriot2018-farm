import React, {Component} from 'react';
import ReactModal from "react-modal";
import {Line} from 'react-chartjs-2';

class Trading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
                type: 'line',
                labels: ['5', '10', '15', '25', '30', '35', '40'],
                datasets: [{
                    label: "BTC",
                    data: [0],
                    fill: false,
                    borderColor: "purple",
                    backgroundColor: "purple"
                }, {
                    label: "LTC",
                    data: [0],
                    fill: false,
                    borderColor: "green",
                    backgroundColor: "green"
                }, {
                    label: "ETH",
                    data: [0],
                    fill: false,
                    borderColor: "red",
                    backgroundColor: "red"
                }, {
                    label: "DASH",
                    data: [0],
                    fill: false,
                    borderColor: "blue",
                    backgroundColor: "blue"
                }],
                options: {
                    responsive: true,
                    events: [],
                }
        };

        this.handleOpenTradingModal = this.handleOpenTradingModal.bind(this);
        this.handleCloseTradingModal = this.handleCloseTradingModal.bind(this);
    }

    componentDidMount(){
        let _this = this;
        setInterval(()=> {
            let oldDatasets = _this.state.datasets;
            let newDatasets = [];

            for (let set of oldDatasets) {
                let newDataset = {
                    ...set
                };
                let newCourse = set.data.length === 0 ? _this.getRandomArbitrary(0, 10) : _this.getRandomArbitrary(0, set.data[set.data.length - 1] + 3);
                newDataset.data.push(newCourse);
                console.log(newDataset);
                newDatasets.push(newDataset);
            }
            let newState = {
                ..._this.state,
                datasets: newDatasets,
            };
            this.setState(newState);
        }, 5000);
    }

    handleOpenTradingModal() {
        this.setState({showModal: true});
    }

    handleCloseTradingModal() {
        this.setState({showModal: false});
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    render() {
        return <div>
            <button onClick={this.handleOpenTradingModal}>Trigger Modal</button>
            <ReactModal
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseTradingModal}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div>
                    <Line ref='chart' data={this.state}/>
                    <button className="RightBottom" onClick={this.handleCloseTradingModal}>close</button>
                </div>
            </ReactModal>;
        </div>
    }
}

export default Trading;