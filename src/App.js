import React, { Component } from 'react';
import './App.css';
import { ContentConnected, WelcomeConnected} from './connected-components'
import FadeMessager from './FadeMessager'
import { withAlert } from 'react-alert'

class App extends Component {

  render () {
    return <div>
      <FadeMessager/>
      <WelcomeConnected/>
      <ContentConnected/>
    </div>
  }
}

export default withAlert(App);