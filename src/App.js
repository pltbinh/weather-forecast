// import logo from './logo.svg';
import React from 'react'
import { Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import { GlobalProvider } from './store/GlobalContext'
import WeatherContainer from './container/weather/Weather.container.js'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Nav>
          <Nav.Item>
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/weather">Weather</Link></Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route path="/weather">
            <WeatherContainer />
          </Route>
          <Route path="/">
            <WeatherContainer />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  )
}

export default App
