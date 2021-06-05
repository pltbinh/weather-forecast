import React from 'react';
import { screen, render } from '@testing-library/react'
import renderer from 'react-test-renderer';

import HomeLayout from './HomeLayout';

describe('FilterComponent', () => {
  it('should render correctly', () => {
    // act
    const component = renderer.create(<HomeLayout />);
    const tree = component.toJSON()

    // assert
    expect(tree).toMatchSnapshot()
  });

  it('should render correct footer and header', () => {
    // act
    render(<HomeLayout />);

    const header = screen.getByTestId('homeHeader')
    const footer = screen.getByTestId('homeFooter')

    // assert
    expect(header).toBeDefined()
    expect(footer).toBeDefined()
  });
})