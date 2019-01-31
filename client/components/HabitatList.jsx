import React from 'react'
import attributes from '../../data/attributes'
import {Link} from 'react-router-dom'

const HabitatList = () => {
  return (
    <div>
      <h1>Habitat</h1>
      <ul>
        {attributes.habitat.map(hab => { return <li key={hab}><Link to={`/attribute/habitat/${hab}`}>{hab}</Link></li> })}
      </ul>
    </div>
  )
}

export default HabitatList
