import * as React from 'react'

interface SquareProps {
  value: number
}

export default class Square extends React.Component<SquareProps, {}> {
  render(): JSX.Element {
    return (
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}