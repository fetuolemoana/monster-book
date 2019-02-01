import React from 'react'

import sitings from '../../data/sitings'

const Sitings = (props) => {
  const id = props.monsterId
  const monsterSitings = sitings.filter(siting => {
    return Number(id) === siting.monsterId
  })
  return (
    <div>
      <h1>Monster Sitings</h1>

      <ul className="attr-ul">
        {monsterSitings.map((siting, index) => {
          return <li className="attr-li" key={index}>{siting.description}</li>
        })}
      </ul>
    </div>
  )
}

export default Sitings
