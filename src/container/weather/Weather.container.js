import React, { useMemo, useReducer } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { take } from 'lodash'

import { GET_WEATHER_URL } from '../../common/url'
import apiService from '../../service/apiService'

import FilterComponent from '../../component/filter/Filter.component'
import WeatherListComponent from '../../component/weather-list/WeatherList.component'
import { weatherReducer, WEATHER_ACTION } from './Weather.reducer'

/**
 * The weather forecast container which contains a filter search along with
 * forecast information of a given city
 *
 * @returns {Component} The weather container
 */
export default function WeatherContainer() {
  const [state, dispatch] = useReducer(weatherReducer, { loading: false, weatherList: [] })

  /**
   * Retrieves forecast data from api
   *
   * @param {String} searchText The city name
   * @returns {Void}
   */
  function onFilter(searchText) {
    dispatch({ type: WEATHER_ACTION.GET_WEATHER_START})

    apiService.get(`${GET_WEATHER_URL}?q=${searchText}`)
      .then(result => {
        const { data: { consolidatedWeather = [], title }} = result.data

        dispatch({
          type: WEATHER_ACTION.GET_WEATHER_SUCCESS,
          payload: {
            weatherList: consolidatedWeather,
            city: title
          }
        })
      })
      .catch(() => {
        dispatch({ type: WEATHER_ACTION.GET_WEATHER_ERROR })
      })
  }

  const { loading, weatherList, city } = state;
  const underlineText = city ? `Result for city: ${city}` : ''

  // Computes and memorizes forecast data
  const computedList = useMemo(() => {
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const fiveDayForecast = take(weatherList, 5)

    return fiveDayForecast.map(i => ({
      id: i.id,
      day: dayOfWeek[new Date(i.applicable_date).getDay()],
      min: i.min_temp.toFixed(2),
      max: i.max_temp.toFixed(2)
    }))
  }, [weatherList])

  return (
    <Container fluid>
      {loading && <Spinner animation='border' variant='primary' />}
      <FilterComponent
        onFilter={onFilter}
        loading={loading}
        underlineText={underlineText}
      />
      <WeatherListComponent data={computedList} />
    </Container>
  )
}