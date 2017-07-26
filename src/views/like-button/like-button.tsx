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
      <div>
        <button className="like-button" onClick={this.handleClickLike}>
          👍 like
        </button>
        <button className="like-button" onClick={this.handleClickDislike}>
          👎 dislike
        </button>
      </div>
    )
  }

  private handleClickLike = () => {
    this.props.add()
  }

  private handleClickDislike = () => {
    this.props.minus()
  }
}