import { reducer, WEATHER_ACTION } from "../Weather.reducer"

const initialState = { loading: false, weatherList: [] }

describe('Weather reducer', () => {
  describe('Handle get weather API', () => {
    it('should turn on loading state when start get data', () => {
      // act
      const state = reducer(initialState, { type: WEATHER_ACTION.GET_WEATHER_START })

      // assert
      expect(state.loading).toBeTruthy()
    })

    it('should update state correctly after successfully get data', () => {
      // arrange
      const payload = {
        weatherList: ['dummyList'],
        city: 'HCM city'
      }

      // act
      const state = reducer(initialState, { type: WEATHER_ACTION.GET_WEATHER_SUCCESS, payload })

      // assert
      expect(state.loading).toBeFalsy()
      expect(state.weatherList).toEqual(payload.weatherList)
      expect(state.city).toEqual(payload.city)
    })

    it('should turn off loading and remove previous data after failed to get data', () => {
      // act
      const state = reducer(initialState, { type: WEATHER_ACTION.GET_WEATHER_ERROR })

      // assert
      expect(state.loading).toBeFalsy()
      expect(state.weatherList).toEqual([])
      expect(state.city).toEqual('')
    })

    it('should return the same state if action is not handled', () => {
      // act
      const state = reducer(initialState, { type: 'not-handled-action' })

      // assert
      expect(state).toEqual(initialState)
    })
  })
})