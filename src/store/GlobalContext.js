import React, { useState } from 'react'

const GlobalContext = React.createContext()
const GlobalUpdateContext = React.createContext()

/**
 * The global context provider
 * This wrapper played as a store to share state between all component across application
 * The children components can consume shared states and update it through updateState also
 *
 * @param {*} children
 * @returns {Component} The global context provider
 */
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState()

  function updateState(newState) {
    setState(newState)
  }

  return (
    <GlobalContext.Provider value={state}>
      <GlobalUpdateContext.Provider value={updateState}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  )
}