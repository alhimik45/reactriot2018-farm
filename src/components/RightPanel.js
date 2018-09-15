import React, { Component } from 'react';
import { ElectroLine, HeatLine } from '../connected-components'
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
      <HeatLine/>
    </div>
    <div>
      Text Help
    </div>
  </div>

export default RightPanel;