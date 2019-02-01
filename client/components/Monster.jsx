import React from 'react'
import monsters from '../../data/monsters'

const Monster = (props) => {
  const { monster, id } = props.match.params
  const chosenMonster = monsters.find(monster => {
    return Number(id) === monster.id
  })
  const capStyle = {
    textTransform: 'capitalize'
  }
  return (
    <div>
      <h1 className="monster-name" >{chosenMonster.name}</h1>

      <div>
        <img className='imageSize' src={chosenMonster.image}/>
      </div>

      <div>
        <h3 className="monster-attr" style={capStyle}>{chosenMonster.region} |  {chosenMonster.element} | {chosenMonster.habitat}</h3>
        <h3 className="monster-description">{chosenMonster.description}</h3>
      </div>
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
