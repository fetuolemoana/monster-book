import React from 'react'

const Monster = (props) => {
  const id = props.match.params.id
  return (
    <div>
      <h1>Monster</h1>
      <h1>{id}</h1>
    </div>
  )
}

export default Monster
