import * as React from 'react'
import Board from '../board/board'

export default class Game extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className="game">
        <div className="game__board">
          <Board />
        </div>
        <div className="game__info">
          <div>{/* status */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    )
  }
}