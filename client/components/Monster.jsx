import React from 'react'
import monsters from '../../data/monsters'



const Monster = (props) => {
  const id = props.match.params.id
  return (
    <div>
      <h1>Hello</h1>
      <h1>{name}</h1>
      <h1>{description}</h1>git 
    </div>
  )
}

export default Monster


// id
// name
// description
// image
// region
// element
// habitat
