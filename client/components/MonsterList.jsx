import React from 'react'
import monsters from '../../data/monsters'
import { Link } from 'react-router-dom'

const MonsterList = (props) => {
  const attr = props.match.params.attribute
  const type = props.match.params.type
  const targetMonsters = monsters.filter((monster) => {
    return monster[attr] === type
  })
  const capStyle = {
    textTransform: 'capitalize'
  }
  let headingMsg = 'Monsters found in ' + type
  if (attr === 'habitat') headingMsg += 's'
  if (attr === 'element') headingMsg = 'Monsters with the ' + type + ' element'
  return (
    <div className="padded-div" style={capStyle}>
      <h1 className='heading'>{headingMsg}</h1>
      <ul className="attr-ul">
        {targetMonsters.map((monster, index) => {
          return <li className="attr-li" key={index}><Link to={`/monster/${monster.id}`}>{monster.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default MonsterList
