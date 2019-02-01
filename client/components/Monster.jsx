import React from 'react'
import monsters from '../../data/monsters'

const Monster = (props) => {
  const {monster, id} = props.match.params
  console.log(id)
  const chosenMonster = monsters.find(monster => {
    return Number(id) === monster.id
  })
  return (
    <div>
      <h1>Hello</h1>
      <h1>{chosenMonster.name}</h1>
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
