import React from 'react'
import attributes from '../../data/attributes'
import {Link} from 'react-router-dom'

const RegionList = () => {
  const capStyle = {
    textTransform: 'capitalize'
  }
  return (
    <div className="padded-div" style={capStyle}>
      <h1 className='heading'>Regions</h1>
      <ul className="attr-ul">
        {attributes.region.map(reg => { return <li className="attr-li" key={reg}><Link to={`/attribute/region/${reg}`}>{reg}</Link></li> })}
      </ul>
    </div>
  )
}

export default RegionList
