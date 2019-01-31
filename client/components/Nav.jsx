import React from 'react'
import {Link} from 'react-router-dom'

import attributes from '../../data/attributes'

const attList = Object.keys(attributes)

const capitalize = (word) => {
  return word[0].toUpperCase() + word.split('').slice(1).join('')
}

const Nav = () => {
  return (
    <div className='div'>
      <h1>Nav</h1>
      <ul>
        {attList.map((attNav, index) => {
          return <li key={index}><Link to={`/${attNav}`}>{capitalize(attNav)}</Link></li>
        })}
      </ul>

    </div>
  )
}

export default Nav

// Object.keys()
// The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.

// Array.prototype.map()
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
