import React, { Component } from 'react';
import './App.css';
import { WelcomeConnected } from './connected-components'
import FadeMessager from './FadeMessager'
import Content from './components/Content'

class App extends Component {

  render () {
    return <div>
      <FadeMessager/>
      <WelcomeConnected/>
      <Content/>
    </div>
  }
}

export default App;