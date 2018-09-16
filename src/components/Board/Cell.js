import React, { Component } from 'react'
import './Cell.css'
import { Fan } from './Fan'
import { Gpu } from './Gpu'
import { Asic } from './Asic'
import { Coin } from "./Coin";

let itemSelector = (item, i = 0) => ({
  universal: additionalProps => <Gpu {...item} img={item.img[i]} {...additionalProps}/>,
  fan: additionalProps => <Fan {...item} img={item.img[i]} {...additionalProps} />,
  asic: additionalProps => <Asic {...item} img={item.img[i]} {...additionalProps} />,
  coin: additionalProps => <Coin {...item} img={item.img[i]} {...additionalProps} />
}[item.type])

export class Cell extends Component {

  constructor (props){
    super(props)
    this.state={i:0}
  }

  componentDidMount(){
    setInterval(this.anim.bind(this), 1000);
  }

  anim () {
    this.setState({i: 1-this.state.i})
  }

  render() {
    const props = this.props
    return props.item
      ? <div className={`cell-item cell-full-item ${props.item.type === 'coin' ? 'cell-coin' : ''}`}
             onClick={props.onClick}>
        {itemSelector(props.item, this.state.i)({ onSwitchCurrency: props.onSwitchCurrency })}
      </div>
      : <div
        className={`cell-item cell-empty-item ${props.itemToBuy ? "cell-hover" : ""}`}
        onClick={props.onClick}>
        {props.itemToBuy ? <div className="preview">{itemSelector(props.itemToBuy)({ preview: true })}</div> : ""}
        &nbsp;
      </div>
  }
}
