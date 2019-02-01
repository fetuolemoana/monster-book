import React from 'react'
import attributes from '../../data/attributes'
import {Link} from 'react-router-dom'

const ElementList = () => {
  const capStyle = {
    textTransform: 'capitalize'
  }
  return (
    <div className="padded-div" style={capStyle}>
      <h1 className='heading'>element</h1>
      <ul className="attr-ul">
        {attributes.element.map(elem => { return <li className="attr-li" key={elem}><Link to={`/attribute/element/${elem}`}>{elem}</Link></li> })}
      </ul>
    </div>
  )
}

export default ElementList
