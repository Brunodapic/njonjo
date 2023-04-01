import React from 'react'

function ScoreboardItem({username,score}) {
  return (
    <div>{username} ,  {score}</div>
  )
}

export default ScoreboardItem