export const WEATHER_ACTION = {
  GET_WEATHER_START: 'GET_WEATHER_START',
  GET_WEATHER_SUCCESS: 'GET_WEATHER_SUCCESS',
  GET_WEATHER_ERROR: 'GET_WEATHER_ERROR'
}

/**
 * Weather reducer, handles state management for WeatherContainer
 *
 * @param {Object} state  The state managed by reducer
 * @param {Object} action The dispatched action
 * @returns
 */
export const reducer = (state, action) => {
  const { type, payload = {}} = action
  switch(type) {
    case WEATHER_ACTION.GET_WEATHER_START: {
      return {
        ...state,
        loading: true
      }
    }

    case WEATHER_ACTION.GET_WEATHER_SUCCESS: {
      const { weatherList, city } = payload

      return {
        ...state,
        weatherList,
        city,
        loading: false
      }
    }

    case WEATHER_ACTION.GET_WEATHER_ERROR: {
      return {
        ...state,
        loading: false,
        weatherList: [],
        city: ''
      }
    }

    default: {
      return state
    }
  }
}