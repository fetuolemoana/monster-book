import React from 'react'
import monsters from '../../data/monsters'
import Sitings from './Sitings'

const Monster = (props) => {
  const {monster, id} = props.match.params
  const chosenMonster = monsters.find(monster => {
    return Number(id) === monster.id
  })
  console.log(chosenMonster.image)
  return (
    <div>
      <img className='imageSize' src={chosenMonster.image}/>
      <h1>{chosenMonster.name}</h1>
      <h3>{chosenMonster.region}</h3>
      <h3>{chosenMonster.element}</h3>
      <h3>{chosenMonster.habitat}</h3>
      <h3>{chosenMonster.description}</h3>
      <Sitings monsterId={id}/>
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
