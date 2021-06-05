import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import WeatherContainer from '../Weather.container'
import { GET_WEATHER_URL } from '../../../common/url'

// Mock reducer
const mockedReducer = jest.fn((state, action) => { return state })
jest.mock('../Weather.reducer', () => ({
  get reducer() {
    return mockedReducer
  },
  get WEATHER_ACTION() {
    return {
      GET_WEATHER_START: 'GET_WEATHER_START',
      GET_WEATHER_SUCCESS: 'GET_WEATHER_SUCCESS',
      GET_WEATHER_ERROR: 'GET_WEATHER_ERROR'
    }
  }
}))

// Mock ApiService
const mockedData = {
  data: {
    consolidatedWeather: [{
      min: 1,
      max: 1,
      day: 'Mon'
    }],
    title: 'some title'
  }
}
const mockedGetApi = jest.fn((url) => {
  if (url === `${GET_WEATHER_URL}?q=correct-text`) {
    return Promise.resolve({ data: mockedData })
  }

  return Promise.reject()
})
jest.mock('../../../service/apiService', () => ({
  get get() {
    return mockedGetApi
  }
}))

// Initial component default state
const defaultState = { loading: false, weatherList: [] }

describe('Weather container', () => {
  describe('Handle get weather API', () => {
    afterEach(() => {
      mockedReducer.mockClear()
      mockedGetApi.mockClear()
    })

    it('should call api with correct param when user submit', async () => {
      // act
      render(<WeatherContainer />)
      const searchField = screen.getByTestId('searchText')
      const btnSearch = screen.getByTestId('btnSearch')

      fireEvent.change(searchField, { target: { value: 'correct-text' }})
      await waitFor(() => {
        fireEvent.click(btnSearch)
      })

      // assert
      expect(mockedGetApi).toBeCalledTimes(1)
      expect(mockedGetApi).toBeCalledWith(`${GET_WEATHER_URL}?q=correct-text`)

      expect(mockedReducer).toBeCalledTimes(2)
      expect(mockedReducer).toBeCalledWith(defaultState, { type: 'GET_WEATHER_START' })
      expect(mockedReducer).toBeCalledWith(defaultState, {
        type: 'GET_WEATHER_SUCCESS',
        payload: {
          weatherList: mockedData.data.consolidatedWeather,
          city: mockedData.data.title
        }
      })
    })

    it('should handle error case if failed to call api', async () => {
      // act
      render(<WeatherContainer />)
      const searchField = screen.getByTestId('searchText')
      const btnSearch = screen.getByTestId('btnSearch')

      fireEvent.change(searchField, { target: { value: 'invalid-text' }})
      await waitFor(() => {
        fireEvent.click(btnSearch)
      })

      // assert
      expect(mockedGetApi).toBeCalledTimes(1)
      expect(mockedReducer).toBeCalledTimes(2)
      expect(mockedReducer).toBeCalledWith(defaultState, { type: 'GET_WEATHER_START' })
      expect(mockedReducer).toBeCalledWith(defaultState, { type: 'GET_WEATHER_ERROR' })
    })
  })
})