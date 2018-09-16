import React from 'react'
import './Gpu.css'
import bitcoin from '../../img/bitcoin.svg'
import dash from '../../img/dash.svg'
import eth from '../../img/ethereum.svg'
import litecoin from '../../img/litecoin.svg'

const SwitchButton = props =>
  <img onClick={props.onClick} className="switchButton" src={{
    BTC: bitcoin,
    DASH: dash,
    ETH: eth,
    LTC: litecoin
  }[props.currency]}/>

export const Gpu = props =>
  <div>
    <SwitchButton currency={props.mine} onClick={props.onSwitchCurrency}/>
    <img src={props.img} alt="gpu" className="item"/>
  </div>