import React from 'react';
import './Board.css'
import { Row } from 'react-bootstrap'
import { Cell } from './Cell'
import helpers from "./helpers";

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(this.insertCoins.bind(this), 5000);
    }

    insertCoins() {
        let rnd = helpers.getRandomCell(this.props.grid);
        let x = rnd[0];
        let y = rnd[1];

        while (this.props.grid[x][y] !== null) {
            rnd = helpers.getRandomCell(this.props.grid);
            x = rnd[0];
            y = rnd[1];
        }

        setTimeout(() => this.props.forcedSetItem({x, y, item: null}), 5000);
        this.props.forcedSetItem({x, y, item: {type: 'coin'}});
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
                              onClick={props.itemToBuy ? e => this.placeItem(x, y, e) : null}
                              onSwitchCurrency={() => props.switchCurrency({x,y})}
                              key={`${x} ${y}`}/>
                    )}
                </Row>
            )}
        </div>);
    }

    placeItem(x, y, e, args) {
        const props = this.props;

        return props.placeItem({
            ...args,
            x,
            y,
            mouseX: e.pageX,
            mouseY: e.pageY
        });
    }
}

export default Board;