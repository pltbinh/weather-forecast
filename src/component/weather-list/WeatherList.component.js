import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

import './WeatherList.css'

/**
 * The weather item, which displays min temp and max temp of a day
 *
 * @param {Array} weather The weather data
 * @returns {Component}
 */
function WeatherItem({ weather }) {
  const { day, min, max } = weather

  return (
    <Col md='4' xs='6' className='mb-3'>
      <Card className='card-item'>
        <Card.Body>
          <Card.Title>{day}</Card.Title>
          <Card.Text>
            Min: {min}
          </Card.Text>
          <Card.Text>
            Max: {max}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

/**
 * The weather list component, can contains multiple weather items
 *
 * @param {Array} data  The forecast data
 * @returns {Component}
 */
export default function WeatherListComponent({ data = [] }) {
  const WeatherItems = data.map(item => {
    return <WeatherItem key={item.id} weather={item} />
  })

  return <Row>{WeatherItems}</Row>
}