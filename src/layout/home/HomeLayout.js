import React from 'react'
import { Jumbotron } from 'react-bootstrap'

import './HomeLayout.css'
export default function HomeLayout({ children }) {
  return (
    <>
      <header>
        <Jumbotron fluid className='header'>
          <h1>Home</h1>
        </Jumbotron>
      </header>
      <div className='content'>
        {children}
      </div>
      <footer>
        <div className='footer mb-0'>
          <p>Designed by pltbinh</p>
        </div>
      </footer>
    </>
  )
}