import * as React from 'react'
import Board from '../board/board'

type historyType = {
  squares: Array<string | null>
}

type squareType = string | null

interface State {
  history: Array<historyType>,
  xIsNext: boolean,
}

const calculateWinner = (squares: Array<squareType>): squareType => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default class Game extends React.Component<{}, State> {
  state: State = {
    history: [{
      squares: Array(9).fill(null)
    }],
    xIsNext: true
  }

  constructor() {
    super()
  }

  handleClick(i: number) {
    const history = this.state.history
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares || squares[i])) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'

    this.setState({
      history: history.concat([{
        squares,
      }]),
      xIsNext: !this.state.xIsNext
    })
  }

  render(): JSX.Element {
    const history = this.state.history
    const current = history[history.length - 1]
    const winner = calculateWinner(current.squares)

    let status
    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`
    }

    return (
      <div className="game">
        <div className="game__board">
          <Board 
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <div className="game__info">
          <div>{status}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    )
  }
}