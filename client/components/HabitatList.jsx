import React from 'react'
import attributes from '../../data/attributes'
import {Link} from 'react-router-dom'

const HabitatList = () => {
  const capStyle = {
    textTransform: 'capitalize'
  }
  return (
    <div className="padded-div" style={capStyle}>
      <h1 className='heading'>Habitat</h1>
      <ul className="attr-ul">
        {attributes.habitat.map(hab => { return <li className="attr-li" key={hab}><Link to={`/attribute/habitat/${hab}`}>{hab}</Link></li> })}
      </ul>
    </div>
  )
}

export default HabitatList
