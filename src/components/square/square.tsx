import * as React from 'react'
import './square.css'

interface SquareProps {
  value: string | null,
  onClick: Function
}

interface State {
  value?: string | null
}

export default class Square extends React.Component<SquareProps, State> {
  state: State = {
    value: null
  }

  constructor() {
    // super(): call the parent constructor 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
    super()
  }

  handleOnClick = () => {
    this.setState({
      value: 'X'
    })
  }

  render(): JSX.Element {
    return (
      <button
        className="square"
        onClick={() => {this.props.onClick()}}
      >
        {this.props.value}
      </button>
    )
  }
}