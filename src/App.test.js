import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { screen, render, cleanup } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    const renderWithRouter = (ui, { route = '/' } = {}) => {
        window.history.pushState({}, 'Test page', route);

        return render(ui, { wrapper: BrowserRouter });
    };
    renderWithRouter(<App />);
  });
  afterEach(() => {
      cleanup();
  });

  it('should render without crashing', () => {});
  it('should use home layout for Home Screen', () => {
    const homeHeader = screen.getByTestId('homeHeader')

    expect(homeHeader).toBeDefined()
  })

})