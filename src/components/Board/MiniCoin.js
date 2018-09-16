import React, { Component } from 'react';
import coin from '../../img/coin.svg'
import { css } from 'glamor'
import './Minicoin.css'

export default class MiniCoin extends Component {

  constructor (props) {
    super(props)
    const fadeInOut = css.keyframes({
      '0%': { opacity: 1 },
      '100%': { opacity: 0.3 }
    })
    this.animation = css({
      position: 'absolute',
      left: Math.random() * 150 - 75,
      top: Math.random() * 150 - 75,
      zIndex: 42,
      animation: `${fadeInOut} 5s`
    })
  }

  componentDidMount () {
    setInterval(this.props.onClose, 2000);
  }

  render () {
    return <img src={coin} alt="coin" className={`minicoin ${this.animation}`}
                onClick={e => {
                  this.props.increaseCurrency({
                    currency: this.props.currency,
                    value: 1,
                    mouseX: e.pageX,
                    mouseY: e.pageY
                  });
                  this.props.onClose()
                }
                }
    />
  }
}
