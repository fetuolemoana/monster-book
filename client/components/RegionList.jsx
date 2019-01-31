import React from 'react'
import attributes from '../../data/attributes'
import {Link} from 'react-router-dom'

const RegionList = () => {
  return (
    <div>
      <h1>Regions</h1>
      <ul>
        {attributes.region.map(reg => { return <li key={reg}><Link to={`/attribute/region/${reg}`}>{reg}</Link></li> })}
      </ul>
    </div>
  )
}

export default RegionList
