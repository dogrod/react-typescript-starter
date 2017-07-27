import * as React from 'react'
import './like-button.css'

interface LikeButtonProps {
  like?: string,
  dislike?: string,
  onLike: Function,
  onDislike: Function,
}

const LikeButton: React.SFC<LikeButtonProps> = (props) => {
  return (
    <div>
      <button
        className="like-button"
        onClick={
          () => props.onLike()
        }
      >
        👍 {props.like}
      </button>
      <button
        className="like-button"
        onClick={
          () => props.onDislike()
        }
      >
        👎 {props.dislike}
      </button>
    </div>
  )
}

LikeButton.defaultProps = {
  like: 'like',
  dislike: 'dislike',
}

export default LikeButton