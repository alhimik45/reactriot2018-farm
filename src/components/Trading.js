import React, {Component} from 'react';
import ReactModal from "react-modal";
import {Line} from 'react-chartjs-2';

class Trading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            type: 'line',
            labels: ['5', '10', '15', '20', '25', '30', '35'],
            datasets: [{
                label: "BTC",
                data: [],
                fill: false,
                borderColor: "purple",
                backgroundColor: "purple"
            }, {
                label: "LTC",
                data: [],
                fill: false,
                borderColor: "green",
                backgroundColor: "green"
            }, {
                label: "ETH",
                data: [],
                fill: false,
                borderColor: "red",
                backgroundColor: "red"
            }, {
                label: "DASH",
                data: [],
                fill: false,
                borderColor: "blue",
                backgroundColor: "blue"
            }],
            options: {
                responsive: false,
                events: [],
            }
        };

        this.handleOpenTradingModal = this.handleOpenTradingModal.bind(this);
        this.handleCloseTradingModal = this.handleCloseTradingModal.bind(this);
    }

    componentDidMount() {
        let _this = this;
        setInterval(() => {
            let needScroll = false;
            let oldDatasets = _this.state.datasets;
            let newDatasets = [];
            let newLabels = _this.state.labels.slice(0);
            for (let set of oldDatasets) {
                let newDataset = {
                    ...set
                };
                let newCourse = set.data.length === 0 ? _this.getRandomArbitrary(500, 750) : _this.getRandomArbitrary(set.data[set.data.length - 1]-10, set.data[set.data.length - 1] + 10);
                if (newDataset.data.length === 9) {
                    newDataset.data.shift();
                    needScroll = true;
                }
                newDataset.data.push(newCourse);
                newDatasets.push(newDataset);
            }
            if (needScroll) {
                newLabels.shift();
                newLabels.push(parseInt(newLabels[newLabels.length - 1]) + 1);
            }
            let newState = {
                ..._this.state,
                labels: newLabels,
                datasets: newDatasets,
            };
            this.setState(newState);
            if (this.refs.chart !== undefined) {
                this.refs.chart.chartInstance.update()
            }
        }, 250);
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