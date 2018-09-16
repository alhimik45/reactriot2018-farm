import React from 'react';
import './Board.css'
import { Col, Row } from 'react-bootstrap'
import { Cell } from './Cell'
import helpers from "./helpers";
import { Tech } from "../../data";

class Board extends React.Component {
  componentDidMount () {
    setTimeout(() => this.insertCoins(), 5000);
    setInterval(this.insertCoins.bind(this), 20000);
  }

  insertCoins () {
    let rnd = helpers.getRandomCell(this.props.grid);
    let x = rnd[0];
    let y = rnd[1];

    let i = 0
    while (this.props.grid[x][y] !== null) {
      ++i;
      if (i > 10) return;
      rnd = helpers.getRandomCell(this.props.grid);
      x = rnd[0];
      y = rnd[1];
    }

    const coinType = helpers.getRandomCoin();
    const img = Tech.coin[coinType.toLowerCase()].img;

    setTimeout(() => this.props.forcedSetItem({ x, y, item: null }), 5000);
        this.props.forcedSetItem({x, y, item: {type: 'coin', coinType: coinType, img: img}});
  }

  render () {
    const props = this.props;

    return <div className="board">
      <Row>
        {props.grid.flatMap((line, y) =>
          line.map((item, x) =>
            <Col key={`${x} ${y}`}>
              <Cell className="item"
                    item={item}
                    itemToBuy={props.itemToBuy}
                              onClick={e => this.onCellClick(props, x, y, item,e)}
                    onSwitchCurrency={props.sellActive
                      ? e => props.sell({ x, y, mouseX: e.pageX, mouseY: e.pageY })
                      : () => props.switchCurrency({ x, y })}
              />
            </Col>
          )
        )}
      </Row>
    </div>
    }

    onCellClick(props, x, y, item,e) {
        if (item && item.type === 'coin') {
            props.forcedSetItem({x: y, y: x, item: null});
            props.updateScore({curr: item.coinType, delta: 50})
            props.upMessage({curr: item.coinType, delta: 50, mouseX: e.pageX, mouseY: e.pageY})
        };

        return props.itemToBuy
            ? props.placeItem({x, y, mouseX: e.pageX, mouseY: e.pageY})
            : props.sellActive && item != null && item.type !== 'coin'
                ? props.sell({x, y, mouseX: e.pageX, mouseY: e.pageY})
                : null;
  }
}

export default Board;