import React, { Component } from 'react';
import { css } from 'glamor'
import './FadeMessager.css'
import { connect } from 'react-redux'

class FadeInOutUp extends Component {
  constructor (props) {
    super(props)
    const fadeInOut = css.keyframes({
      '0%': { top: this.props.top - window.scrollY },
      '90%': { top: this.props.top - window.scrollY - 20 },
      '100%': { top: -1000 }
    })
    this.animation = css({
      position: 'fixed',
      left: this.props.left - window.scrollX,
      top: this.props.top - window.scrollY,
      zIndex: 42,
      animation: `${fadeInOut} ${this.props.timeMs / 1000 || 1}s`
    })
  }

  componentWillMount () {
    setTimeout(() => {
      if (this.props.onAnimationEnd) {
        this.props.onAnimationEnd()
      }
    }, this.props.timeMs || 1000)
  }

  render () {
    return (
      <div className={`${this.animation}`}>
        {this.props.children}
      </div>
    )
  }
}

const FadeMessager = props =>
  props.messages.map(msg =>
    <FadeInOutUp
      key={msg.key}
      top={msg.y - 20}
      left={msg.x - 20}
      onAnimationEnd={() => props.removeMessage(msg.key)}>
      <div className="fade-in-out-item">
        {msg.text}
      </div>
    </FadeInOutUp>)

export default connect(({ fadeMessages: { messages } }) => ({
  messages
}), ({ fadeMessages: { removeMessage } }) => ({
  removeMessage
}))(FadeMessager)