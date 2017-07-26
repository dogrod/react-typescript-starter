import * as React from 'react'
import './like-button.css'

interface State {
  isLiked: boolean
}

interface Props {
  add: Function,
  minus: Function
}

export default class LikeButton extends React.Component<Props, State> {
  state: State = {
      isLiked: false,
  }

  constructor() {
    super()

    // this.handleClickLikeButton = this.handleClickLikeButton.bind(this)
  }

  render() {
    return (
      <button className="like-button" onClick={this.handleClickLikeButton}>
        👍
        {this.state.isLiked
          ? 'cancel'
          : 'like'
        }
      </button>
    )
  }

  private handleClickLikeButton = () => {
    this.setState((prevState: State): State => {
      if (!prevState.isLiked) {
        this.props.add()
      } else {
        this.props.minus()
      }
      return {
        isLiked: !prevState.isLiked
      }
    })
  }
}