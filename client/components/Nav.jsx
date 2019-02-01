import React from 'react'
import { Link } from 'react-router-dom'

import attributes from '../../data/attributes'

const attList = Object.keys(attributes)

const homeIcon = '/images/home-icon.png'

const capitalize = (word) => {
  return word[0].toUpperCase() + word.split('').slice(1).join('')
}

const Nav = () => {
  return (
    <div className='nav-div'>
      <ul className="nav-ul">
        <li className="nav-li"><Link to="/"><img className="home-icon" src={homeIcon}/></Link></li>
        {attList.map((attNav, index) => {
          return <li className="nav-li" key={index}><Link className="nav-li-a" to={`/${attNav}`}>{capitalize(attNav)}</Link></li>
        })}
        <div className="nav-li nav-header"><b>Monster Book</b></div>
      </ul>
    </div>
  )
}

export default Nav

// Object.keys()
// The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.

// Array.prototype.map()
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
