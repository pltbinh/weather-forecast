import React from 'react';
import { times } from 'lodash';

import { screen, render } from '@testing-library/react';
import WeatherListComponent from '../WeatherList.component'

// DOM testing
const generateTestData = (n = 0) => {
  return times(n).map(index => ({
    id: index,
    day: 1,
    min: 1,
    max: 1
  }))
}

describe('WeatherListComponent', () => {
  it('should render empty if data is empty', () => {
    // arrange
    const data = []

    // act
    render(
      <WeatherListComponent data={data}/>
    )
    const weatherItem = screen.queryAllByText(/Min/)

    // assert
    expect(weatherItem.length).toEqual(0)
  })

  it.each([
    [generateTestData(2), 2],
    [generateTestData(5), 5],
    [generateTestData(7), 7]
  ])
  ('should render correctly if having data', (data, expectedItems) => {
    // act
    render(
      <WeatherListComponent data={data}/>
    )
    const weatherItems = screen.getAllByText(/Min/)

    // assert
    expect(weatherItems.length).toEqual(expectedItems)
  })
})
