import React from 'react';
import './Board.css'
import { Row } from 'react-bootstrap'
import { Cell } from './Cell'

const Board = props => <div className="board">
  {props.grid.map((line, j) =>
    <Row key={j}>
      {line.map((item, i) =>
        <Cell className="item"
              item={item}
              key={`${i} ${j}`}/>
      )}
    </Row>
  )}
</div>

export default Board;