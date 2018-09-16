import React, { Component } from 'react';
import './App.css';
import {
    ContentConnected,
    TradingConnected,
    WelcomeConnected
} from './connected-components'
import FadeMessager from './FadeMessager'

export default class App extends Component {

  render () {
    return <div>
      <FadeMessager/>
      <WelcomeConnected/>
      <TradingConnected/>
      <ContentConnected/>
    </div>;
  }
}