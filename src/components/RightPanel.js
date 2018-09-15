import React from 'react';
import ShopItem from './ShopItem';
import {BuySquare, DollarsValue, ElectroLine, HeatLine, MegahashValue} from '../connected-components'

const RightPanel = props =>
    <div>
        <div>
            <DollarsValue/>
        </div>
        <div>
            <MegahashValue/>
        </div>
        <div>
            <ElectroLine/>
        </div>
        <div>
            <HeatLine/>
        </div>
        <div>
            <BuySquare/>
        </div>
        <div>
            <BuySquare/>
        </div>
        <div>
            <ShopItem/>
        </div>
    </div>

export default RightPanel;