import React from 'react'
import logo from './asset/logo.png';
import { Nav, Navbar } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { GlobalProvider } from './store/GlobalContext'
import WeatherContainer from './container/weather/Weather.container.js'

import MainLayout from './layout/main/MainLayout'
import HomeLayout from './layout/home/HomeLayout'
import './App.css'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar bg='dark'>
          <Navbar.Brand>
            <Link to='/'>
              <img
                src={logo}
                width='30'
                height='30'
                alt='React Bootstrap logo'
              />
            </Link>
          </Navbar.Brand>
          <Nav className='main-navbar'>
            <Nav.Item className='mr-3'>
              <Link to='/'>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to='/weather'>Weather</Link>
            </Nav.Item>
          </Nav>
        </Navbar>

        <Switch>
          <Route path='/weather'>
            <MainLayout>
              <WeatherContainer />
            </MainLayout>
          </Route>
          <Route path='/'>
            <HomeLayout/>
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  )
}

export default App
