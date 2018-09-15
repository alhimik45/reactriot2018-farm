import React, { Component } from 'react';
import LineIndicator from './components/LineIndicator'

const RightPanel = () =>
  <div>
    <div>
      $      
    </div>
    <div>
      ????
    </div>
    <div>
      🔥 <LineIndicator count={32}/>
    </div>
    <div>
      🗲 <LineIndicator count={32}/>
    </div>
    <div>
      Text Help
    </div>
  </div>

export default RightPanel;