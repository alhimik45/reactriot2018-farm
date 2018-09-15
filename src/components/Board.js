import React, { Component } from 'react';
import './Board.css'
import ReactCursorPosition from 'react-cursor-position'

class BoardInner extends Component {
  constructor (props) {
    super(props)
    this.movingObject = React.createRef()
    this.lastLeft = 0
    this.lastTop = 0
  }

  render () {
    const movingObjectWidth = (this.movingObject.current && this.movingObject.current.offsetWidth) || 0
    const movingObjectHeight = (this.movingObject.current && this.movingObject.current.offsetHeight) || 0
    const { x, y } = this.props.position;

    let left = x - movingObjectWidth / 2
    let top = y - movingObjectHeight / 2

    if (left < 0 || left + movingObjectWidth > this.props.elementDimensions.width)
      left = this.lastLeft
    if (top < 0 || top + movingObjectHeight > this.props.elementDimensions.height)
      top = this.lastTop
    this.lastLeft = left
    this.lastTop = top

    return <div className="board">
        <div ref={this.movingObject}
           className="moving-object"
           style={{ position: 'relative', left: left, top: top }}>
        Mouse coordinates: {x} {y}
        </div>
      </div>
  }
}

const Board = () => <ReactCursorPosition>
  <BoardInner/>
</ReactCursorPosition>

export default Board;
