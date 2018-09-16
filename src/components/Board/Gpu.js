import React from 'react'
import './Gpu.css'
import bitcoin from '../../img/bitcoin.svg'
import dash from '../../img/dash.svg'
import eth from '../../img/ethereum.svg'
import litecoin from '../../img/litecoin.svg'
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'

const SwitchButton = props =>
  <img alt={props.currency} onClick={props.onClick} className="switchButton" src={{
    BTC: bitcoin,
    DASH: dash,
    ETH: eth,
    LTC: litecoin
  }[props.currency]}/>

export const Gpu = props =>
  <Tooltip placement="top" trigger={props.preview ? [] : ['hover']} mouseLeaveDelay={0} overlay={<div className="my-tooltip">
    <b>Cost: </b>
    ${props.cost}<br/>
    <b>MH/s: </b>
    {props.hashes}<br/>
    <b>Heats Up: </b>
    {props.heatChange}°C<br/>
  </div>
  }>
    <div>
      <SwitchButton currency={props.mine} onClick={props.onSwitchCurrency}/>
      <img src={props.img} alt="gpu" className="item"/>
    </div>
  </Tooltip>