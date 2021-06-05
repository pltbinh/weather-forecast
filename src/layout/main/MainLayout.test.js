import React from 'react';
import { screen, render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import MainLayout from './MainLayout';

describe('FilterComponent', () => {
  it('should render correctly', () => {
    // act
    const component = renderer.create(<MainLayout />)
    const tree = component.toJSON()

    // assert
    expect(tree).toMatchSnapshot()
  });

  it('should render correct footer and header', () => {
    // act
    render(<MainLayout />)

    const header = screen.getByTestId('mainHeader')
    const footer = screen.getByTestId('mainFooter')

    // assert
    expect(header).toBeDefined()
    expect(footer).toBeDefined()
  });
})