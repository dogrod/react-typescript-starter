import * as React from 'react'
import './index.css'

import LikeButton from '../like-button/like-button'

interface State {
  liked: number
}

class Index extends React.Component<{}, State> {
  state: State = {
    liked: 0,
  }

  handleOnLike = () => {
    this.setState((prevState: State): State => {
      return {
        liked: prevState.liked + 1,
      }
    })
  }

  handleOnDislike = () => {
    this.setState((prevState: State): State => {
      return {
        liked: prevState.liked - 1,
      }
    })
  }

  render(): JSX.Element {
    return (
      <div className="index">
        <div>
          Like Count: {this.state.liked}
        </div>
        <LikeButton 
          onLike={this.handleOnLike} 
          onDislike={this.handleOnDislike}
        />
      </div>
    )
  }
}

export default Index