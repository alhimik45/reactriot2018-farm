import React, { Component } from 'react';
import './RightPanel.css';
import LineIndicator from './components/LineIndicator'

const RightPanel = () =>
  <div>
    <div className="BoxWithBorder">
      $ { this.props.dollar }
    </div>
    <div className="BoxWithBorder">
      ???? 
    </div>
    <div>
      🔥 <LineIndicator count= { this.props.fire } />
    </div>
    <div>
      🗲 <LineIndicator count= { this.props.electro } />
    </div>
    <div>
      Text Help
    </div>
  </div>

export default RightPanel;