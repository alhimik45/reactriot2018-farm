import React, { Component } from 'react';
import { ElectroLine } from '../connected-components'
import LineIndicator from './LineIndicator'

const RightPanel = () =>
  <div>
    <div>
      $      
    </div>
    <div>
      ????
    </div>
    <div>
      <ElectroLine/>
    </div>
    <div>
      🗲 <LineIndicator count={32}/>
    </div>
    <div>
      Text Help
    </div>
  </div>

export default RightPanel;