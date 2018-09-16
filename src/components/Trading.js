import React, { Component } from 'react';
import ReactModal from "react-modal";
import { Line } from 'react-chartjs-2';
import {Button, ButtonToolbar, Col, Form, FormControl, FormGroup, InputGroup} from "react-bootstrap";
import Dropdown from 'react-dropdown'
import './Trading.css'
import 'react-dropdown/style.css'
import x from '../img/x.svg'
import exchange from '../img/exchange.svg'

class Trading extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      type: 'line',
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [{
        label: "BTC",
        data: [0.001],
        fill: false,
        borderColor: "orange",
        backgroundColor: "orange"
      }, {
        label: "LTC",
        data: [0.001],
        fill: false,
        borderColor: "gray",
        backgroundColor: "gray"
      }, {
        label: "ETH",
        data: [0.001],
        fill: false,
        borderColor: "purple",
        backgroundColor: "purple"
      }, {
        label: "DASH",
        data: [0.001],
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
      volume: 1,
      correlations: {
        BTC: {
          maxCorrelation: 100,
          minCorrelation: 100
        },
        LTC: {
          maxCorrelation: 100,
          minCorrelation: 100
        },
        ETH: {
          maxCorrelation: 100,
          minCorrelation: 100
        },
        DASH: {
          maxCorrelation: 100,
          minCorrelation: 100
        }
      },
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
        let newCourse = set.data.length === 0 ? _this.getRandomArbitrary(100, 150) : this.generatePriceValue(set.label);
        newCourse = parseFloat(newCourse.toFixed(3));
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
    }, 2000);
    setInterval(() => {
      let newCorrelations = {};
      for (let [key, value] of Object.entries(this.state.correlations)) {
        if (Math.random() > 0.5) {
          console.log(key + ' down')
          let newMinCorrelation = this.getRandomArbitrary(value.minCorrelation - 50 < 0 ? 0 : value.minCorrelation - 50,  value.minCorrelation)
          let newMaxCorrelation = this.getRandomArbitrary(newMinCorrelation,  value.maxCorrelation -  value.minCorrelation);
          newCorrelations[key] = {minCorrelation: newMinCorrelation, maxCorrelation: newMaxCorrelation};
        } else {
          console.log(key + ' up')
          let newMinCorrelation = this.getRandomArbitrary(value.minCorrelation + 50, value.maxCorrelation - value.minCorrelation)
          let newMaxCorrelation = this.getRandomArbitrary(value.maxCorrelation, value.maxCorrelation + 50);
          newCorrelations[key] = {minCorrelation: newMinCorrelation, maxCorrelation: newMaxCorrelation};
        }
      }
      this.setState({correlations: newCorrelations});
    }, 20000)
  }

  handleOpenTradingModal () {
    this.setState({ showModal: true });
  }

  handleCloseTradingModal () {
    this.setState({ showModal: false });
  }

  getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min;
  }

  generatePriceValue(label) {
    let currency = this.state.datasets.filter(obj => {
      return obj.label === label
    });
    let value = currency[0].data[currency[0].data.length - 1];

    //by changing max(min)Correlation in state we can change the price
    let maxVolatile = value + this.state.correlations[label].maxCorrelation;
    let minVolatile = value - 10 < 0 ? 0.5 : value - this.state.correlations[label].minCorrelation;

    let minPercentage = maxVolatile / value;
    let maxPercentage = minVolatile / value;
    let range = maxPercentage - minPercentage;
    let change = Math.random() * range + minPercentage;
    value = Math.round(value * change) ;
    if (value <= 0) {
      value = 1;
    }
    return value;
  };

  getSelectedPrice () {
    let result = this.state.datasets.filter(obj => {
      return obj.label === this.state.selected.value
    });
    let volume = this.state.volume;
    if (isNaN(volume)) {
      volume = 0;
    } else if (parseInt(volume, 10) < 0) {
      volume = 0;
    }
    if (result.length === 0) {
      return 0;
    } else {
      let returned = result[0].data[result[0].data.length - 1];
      if (isNaN(returned)) {
        return 0;
      } else {
        return returned * volume;
      }
    }
  }

  getPrice (currency) {
    let result = this.state.datasets.filter(obj => {
      return obj.label === currency
    });
    if (result.length === 0) {
      return 0;
    } else {
      let returned = result[0].data[result[0].data.length - 1];
      if (isNaN(returned)) {
        return 0;
      } else {
        return returned;
      }
    }
  }

  getValidationState () {
    const value = this.state.volume;
    if (isNaN(value)) return 'error';
    if (parseInt(value, 10) < 0) return 'error';
    return 'error';
  }

  render () {
    return <div className="PickHolder">
      <h4 className="ExchangeLabel">
        Stock exchange
      </h4>
      <input type="image" name="image" src={exchange} width="50" onClick={this.handleOpenTradingModal}/>
      <ReactModal
        isOpen={this.state.showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={this.handleCloseTradingModal}
        className="TradingModal"
        overlayClassName="Overlay"
      >
        <Line ref='chart' data={this.state}/>
        <div className="CoursesHolder">
          <p className="Course">BTC: {this.getPrice("BTC")}</p>
          <p className="Course">LTC: {this.getPrice("LTC")}</p>
          <p className="Course">ETH: {this.getPrice("ETH")}</p>
          <p className="Course">DASH: {this.getPrice("DASH")}</p>
        </div>
        <Button className="ExitButton" onClick={this.handleCloseTradingModal}>
          <img alt="exit" src={x}/>
        </Button>
        <Form inline>
          <FormGroup className="TradingForm" controlId="formBasicText" validationState={this.getValidationState()}>
            <InputGroup className="TenRightMargin">
              <FormControl type="text" value={this.state.volume} onChange={(event) => {this.setState({ volume: event.target.value })}}/>
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
      </ReactModal>
    </div>
  }
}

export default Trading;