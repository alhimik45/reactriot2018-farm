import React, { Component } from 'react';
import './Board.css'
import { Row } from 'react-bootstrap'


const Board = props => <div className="board">
  {props.grid.map((line, j) =>
    <Row key={j}>
      {line.map((item, i) =>
        item ? <div className="item"
                    key={item.key}>
          {item.key}
        </div> : <div key={`${i} ${j}`} className="item empty-item">&nbsp;</div>
      )}
    </Row>
  )}
</div>

export default Board;