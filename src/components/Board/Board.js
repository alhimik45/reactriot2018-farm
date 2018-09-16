import React from 'react';
import './Board.css'
import { Row } from 'react-bootstrap'
import { Cell } from './Cell'

const Board = props => <div className="board">
  {props.grid.map((line, y) =>
    <Row key={y}>
      {line.map((item, x) =>
        <Cell className="item"
              item={item}
              itemToBuy={props.itemToBuy}
              onClick={props.itemToBuy ? e => props.placeItem({ x, y, mouseX: e.pageX, mouseY: e.pageY }) : null}
              onSwitchCurrency={() => props.switchCurrency({x,y})}
              key={`${x} ${y}`}/>
      )}
    </Row>
  )}
</div>

export default Board;