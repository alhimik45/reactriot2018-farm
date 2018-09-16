import React from 'react';
import { ShopConnected, TradingConnected } from '../../connected-components'
import { ShopItems } from '../../data'

const RightPanel = props =>
  <div>
    <div id="hackbit-vote-widget">
      <div className="hb-vote-widget">
        <a className="hb-link" href="https://www.reactriot.com/entries/124-dteam" target="_blank">Built for <img
          height="30" src="https://rumblex-reactriot1.s3.amazonaws.com/images/widget-logo.png" alt="Widget logo"/></a>

        <a className="hb-vote-btn" href="https://www.reactriot.com/entries/124-dteam/vote"
           onClick={e => {
             e.preventDefault();
             return window.open("https://www.reactriot.com/entries/124-dteam/vote?popup=true", 'voteWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=700,height=600')
           }
           }>Vote for us</a>

      </div>
    </div>
    <TradingConnected/>
    <div style={{ borderTop: '1px black solid' }}>
      <ShopConnected items={ShopItems}/>
    </div>
  </div>

export default RightPanel;