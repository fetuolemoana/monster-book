import React from 'react'
import attributes from '../../data/attributes'
import {Link} from 'react-router-dom'

const ElementList = () => {
  return (
    <div>
      <h1>Elements</h1>
      <ul>
        {attributes.element.map(elem => { return <li key={elem}><Link to={`/attribute/element/${elem}`}>{elem}</Link></li> })}
      </ul>
    </div>
  )
}

export default ElementList
