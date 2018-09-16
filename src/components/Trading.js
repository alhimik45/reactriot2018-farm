import React, { Component } from 'react';
import ReactModal from "react-modal";
import { Line } from 'react-chartjs-2';
import { Button, ButtonToolbar, Form, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import Dropdown from 'react-dropdown'
import './Trading.css'
import 'react-dropdown/style.css'
import x from '../img/x.svg'

class Trading extends Component {
  constructor (props) {
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
        responsive: true,
        events: [],
      },
      selected: { value: "BTC", label: "BTC" },
      dropdownOptions: ["BTC", "LTC", "ETH", "DASH"],
      volume: 0,
    };

    this.handleOpenTradingModal = this.handleOpenTradingModal.bind(this);
    this.handleCloseTradingModal = this.handleCloseTradingModal.bind(this);
  }

  componentDidMount () {
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
        let newCourse = set.data.length === 0 ? _this.getRandomArbitrary(500, 750) : _this.getRandomArbitrary(set.data[set.data.length - 1] - 10, set.data[set.data.length - 1] + 10);
        if (newDataset.data.length === 7) {
          newDataset.data.shift();
          needScroll = true;
        }
        newDataset.data.push(newCourse);
        newDatasets.push(newDataset);
      }
      if (needScroll) {
        newLabels.shift();
        newLabels.push(parseInt(newLabels[newLabels.length - 1], 10) + 1);
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
    }, 1000);
  }

  handleOpenTradingModal () {
    this.setState({ showModal: true });
  }

  handleCloseTradingModal () {
    this.setState({ showModal: false, volume: 0 });
  }

  getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min;
  }

  getSelectedPrice () {
    let result = this.state.datasets.filter(obj => {
      return obj.label === this.state.selected.value
    });
    if (result.length === 0) {
      return 0;
    } else {
      return result[0].data[result[0].data.length - 3] * this.state.volume;
    }
  }

  render () {
    return <div>
      <button onClick={this.handleOpenTradingModal}>Trigger Modal</button>
      <ReactModal
        isOpen={this.state.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.handleCloseTradingModal}
        className="TradingModal"
        overlayClassName="Overlay"
      >
        <Line ref='chart' data={this.state}/>
        <Button className="ExitButton" onClick={this.handleCloseTradingModal}>
          <img alt="exit" src={x}/>
        </Button>
        <Form inline>
          <FormGroup className="TradingForm">
            <InputGroup className="TenRightMargin">
              <FormControl type="text" onChange={(event) => {this.setState({ volume: event.target.value })}}/>
              <Dropdown options={this.state.dropdownOptions}
                        onChange={(eventKey) => {this.setState({ selected: eventKey })}}
                        value={this.state.selected}
                        placeholder="Select cryptocurrency"/>
            </InputGroup>
            <InputGroup>
              <ButtonToolbar>
                <Button onClick={e => this.props.buy({
                  currency: this.state.selected.value,
                  volume: this.state.volume,
                  price: this.getSelectedPrice(),
                  mouseX: e.pageX,
                  mouseY: e.pageY
                })} className="TenRightMargin">Buy for {this.getSelectedPrice()} USD</Button>
                <Button
                  onClick={e => this.props.sell({
                    currency: this.state.selected.value,
                    volume: this.state.volume,
                    price: this.getSelectedPrice(),
                    mouseX: e.pageX,
                    mouseY: e.pageY
                  })}>Sell for {this.getSelectedPrice()} USD</Button>
              </ButtonToolbar>
            </InputGroup>
          </FormGroup>
        </Form>
        <p></p>
      </ReactModal>;
    </div>
  }
}

export default Trading;