import React from 'react';
import './Board.css'
import { Row } from 'react-bootstrap'
import { Cell } from './Cell'
import helpers from "./helpers";
import {Tech} from "../../data";

class Board extends React.Component {
    componentDidMount() {
        setInterval(this.insertCoins.bind(this), 5000);
    }

    insertCoins() {
        let rnd = helpers.getRandomCell(this.props.grid);
        let x = rnd[0];
        let y = rnd[1];

        let i = 0
        while (this.props.grid[x][y] !== null) {
            ++i;
            if(i > 10) return;
            rnd = helpers.getRandomCell(this.props.grid);
            x = rnd[0];
            y = rnd[1];
        }

        const coinType = helpers.getRandomCoin();
        const img = Tech.coin[coinType.toLowerCase()].img;

        setTimeout(() => this.props.forcedSetItem({x, y, item: null}), 5000);
        this.props.forcedSetItem({x, y, item: {type: 'coin', img: img}});
    }

    render() {
        const props = this.props;

        return (<div className="board">
            {props.grid.map((line, y) =>
                <Row key={y}>
                    {line.map((item, x) =>
                        <Cell className="item"
                              item={item}
                              itemToBuy={props.itemToBuy}
                              onClick={props.itemToBuy
                                  ? e => props.placeItem({ x, y, mouseX: e.pageX, mouseY: e.pageY })
                                  : props.sellActive && item !== null && item.type !== 'coin'
                                      ? e => props.sell({ x, y, mouseX: e.pageX, mouseY: e.pageY })
                                      : null}
                              onSwitchCurrency={props.sellActive
                                  ? e => props.sell({ x, y, mouseX: e.pageX, mouseY: e.pageY })
                                  : () => props.switchCurrency({ x, y })}
                              key={`${x} ${y}`}/>
                    )}
                </Row>
            )}
            </div>)
    }
}

export default Board;