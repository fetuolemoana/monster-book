import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import RegionList from './RegionList'
import HabitatList from './HabitatList'
import Monster from './Monster'
import ElementList from './ElementList'
import MonsterList from './MonsterList'
import Header from './Header'

const App = () => {
  return (
    <div>
      <Nav />
      {/* <Header /> */}

      <Route exact path="/" component={Home} />
      <Route path="/region" component={RegionList} />
      <Route path="/habitat" component={HabitatList} />
      <Route path="/element" component={ElementList} />
      <Route path="/monster/:id" component={Monster} />
      <Route path="/attribute/:attribute/:type" component={MonsterList} />

    </div>
  )
}

export default App
