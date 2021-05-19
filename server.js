/**
 * A simple NodeJS server to retrieve data from metaweather API
 */

const axios = require('axios')
const express = require('express')
const cors = require('cors');
const _ = require('lodash')
const camelcaseKeys = require('camelcase-keys');

const app = express()
const port = 3001

const META_WEATHER_API = 'https://www.metaweather.com/api'

app.use(express.json());
app.use(cors());

/**
 * Retrieve forecast data of a city
 * The search text could match mutliple cities, forecast data will be retrieved only for
 * the first city in the list
 */
app.get('/weather', async (req, res) => {
  const searchText = req.query.q

  try {
    const result = await axios.get(`${META_WEATHER_API}/location/search/?query=${searchText}`)
    const { data: cities } = result;
    if (cities.length === 0) {
      return res.send({ status: 'success', data: [] })
    }

    const firstLocation = _.first(cities)
    const { woeid } = firstLocation
    const weatherResult = await axios.get(`${META_WEATHER_API}/location/${woeid}`)

    res.send({
      status: 'success',
      data: camelcaseKeys(weatherResult.data)
    })
  } catch(e) {
      res.send({ status: 'failed', error_code: 'xxx', error_message: 'Can not query' })
  }
})

// Starts server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})