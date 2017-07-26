import * as React from 'react'
import './index.css'

import LikeButton from '../like-button/like-button'

interface State {
  liked: number
}

class Index extends React.Component<{}, {}> {
  state: State = {
    liked: 0,
  }

  handleClickAdd = () => {
    this.setState((prevState: State): State => {
      return {
        liked: prevState.liked + 1,
      }
    })
  }

  handleClickCancel = () => {
    this.setState((prevState: State): State => {
      return {
        liked: prevState.liked - 1,
      }
    })
  }

  render() {
    return (
      <div className="index">
        <div>
          Like Count: {this.state.liked}
        </div>
        <LikeButton add={this.handleClickAdd} minus={this.handleClickCancel}/>
        <LikeButton add={this.handleClickAdd} minus={this.handleClickCancel}/>
        <LikeButton add={this.handleClickAdd} minus={this.handleClickCancel}/>
      </div>
    )
  }
}

export default Index