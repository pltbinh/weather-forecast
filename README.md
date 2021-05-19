# The Weather Forecast Demo Project

## Table of Contents

- [Introduce](#introduce)
- [Technical Note](#technical-note)
- [Setup & Run](#setup-&-run)
- [Run Test](#run-test)
- [Contributors](#contributors)

## Introduce

A simple forecast application to demonstrate how to use React Hooks as state management. You can use this struture to continue scale up your business.

In this application, you can search for 5-days-forecast information of a city by its name. Forecast information includes city name, min temperature and max temperature.
## Technical Note

- Built with [Create React App](https://github.com/facebook/create-react-app) and will use its default configuration (webpack, babel,...)
- Use [Bootstrap UI](https://www.bootstrap-ui.com) component base for consistent style.
- Mainly focus on [React Hooks](https://reactjs.org/docs/hooks-intro.html) to build state management system.
- Use both [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to write sample tests
- Project contains a simple NodeJS server to consume public API. The client side should only communicate with this server to avoid security risk

## Setup & Run
Bellow instructions contain command which can be run by `npm` or `yarn`

### `npm run server`
First, you need to start the NodeJS server to make sure the Frontend side can consume data correctly
The server will be listening at port 3001, you can change this configuration in `./server.js`

When NodeJS server starts successfully, you can open other command line window to start the Frontend server

### `npm start`

Build and start React Application (Frontend side) development server
The FE server will be run at port [http://localhost:3000](http://localhost:3000)
Now you can access local server and start building things up

For other build, deployment & optimization operation, please see [Create React App document](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Run Test

- Simply run `npm run test` to run all the testcases. The test file should have format `*.test.js` for the test runner to detect.
- Due to it will be run on Jest, there is a configuration file `./jest.config.js` located at the top level, you can config it accordingly, refer [Jest Config Document](https://jestjs.io/docs/configuration)
- Run `npm run coverage` to see the coverage report

## Contributors
[@pltbinh](https://github.com/pltbinh)
