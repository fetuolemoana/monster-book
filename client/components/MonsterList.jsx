import React from 'react'
import monsters from '../../data/monsters'
import { Link } from 'react-router-dom'

const MonsterList = (props) => {
  const attr = props.match.params.attribute
  const type = props.match.params.type
  const targetMonsters = monsters.filter((monster) => {
    return monster[attr] === type
  })
  return (
    <div>
      <h1>{attr} : {type}</h1>
      <ul>
        {targetMonsters.map((monster, index) => {
          return <li key={index}><Link to={`/monster/${monster.id}`}>{monster.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default MonsterList
