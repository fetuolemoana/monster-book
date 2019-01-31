import React from 'react'
import {Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import RegionList from './RegionList'
import HabitatList from './HabitatList'
import Monster from './Monster'
import ElementList from './ElementList'

const App = () => {
  return (
    <div>
      <Nav />

      <Route exact path="/" component={Home} />
      <Route exact path="/region" component={RegionList} />
      <Route exact path="/habitat" component={HabitatList} />
      <Route exact path="/element" component={ElementList} />
      <Route exact path="/monster/:id" component={Monster} />

    </div>
  )
}

export default App
