
import React, { Component } from 'react'
import Nav from './routeProject/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './routeProject/Home'
import About from './routeProject/About'
import Contact from './routeProject/Contact'
import Register from './routeProject/Register'
export class App extends Component {
  
  render() {
    return (
      <div className= 'app'>
        <Router>
          <Nav/>
          <Switch>
            <Route exact path ='/' component={Home}/>
            <Route path ='/About' component={About}/>
            <Route path ='/Contact' component={Contact}/>
            <Route path ='/Register' component={Register}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App

