import React from 'react'
import { Jumbotron } from 'react-bootstrap'

import './MainLayout.css'
export default function MainLayout({ children }) {
  return (
    <>
      <header data-testid='mainHeader'>
        <Jumbotron fluid className='header'>
          <h1>Weather Forecast Application</h1>
        </Jumbotron>
      </header>
      <div className='content'>
        {children}
      </div>
      <footer data-testid='mainFooter'>
        <div className='footer mt-3'>
          <p>Designed by pltbinh</p>
        </div>
      </footer>
    </>
  )
}