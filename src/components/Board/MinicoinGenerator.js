import React, { Component } from 'react';
import { produce } from 'immer'
import { MiniCoinConnected } from '../../connected-components'

export default class MinicoinGenerator extends Component {
  constructor (props) {
    super(props)
    this.state = { coins: {} }
    this.coinsCollected = 0
  }

  componentDidMount () {
    setInterval(this.spawnCoins.bind(this), 1000);
  }

  spawnCoins () {
    this.coinsCollected += this.props.coin
    if (this.coinsCollected > 1) {
      this.setState(produce(state => {
        while (this.coinsCollected > 1) {
          this.coinsCollected -= 1
          state.coins[Math.random()] = true
        }
      }))
    }
  }

  render () {
    return <div style={{ position: 'relative' }}>
      {Object.keys(this.state.coins).map(key =>
        <MiniCoinConnected key={key}
                           currency={this.props.currency}
                           onClose={() =>
                             this.setState(produce(state => {delete state.coins[key]}))}
        />)}
    </div>
  }
}
