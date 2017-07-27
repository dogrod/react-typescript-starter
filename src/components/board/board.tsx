import * as React from 'react'

import Square from '../square/square'

export default class Board extends React.Component<{}, {}> {

  // returns a square function
  renderSquare(i: number): JSX.Element {
    return <Square value={i} />
  }

  render(): JSX.Element {
    const status = 'Next player X'

    return (
      <div>
        <div className="board__status">{status}</div>
        <div className="board__row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board__row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board__row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}